import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Processing chat request with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: `شما دستیار هوشمند فروشگاه اتحاد هستید. فروشگاه اتحاد مرجع تخصصی فروش لپ‌تاپ استوک سرفیس مایکروسافت و مک‌بوک اپل است.

اطلاعات کلیدی:
- محصولات: Surface Pro 9، Surface Laptop 5، MacBook Pro 14، MacBook Air M2
- گارانتی: ۱۲ ماه معتبر برای همه محصولات
- کیفیت: فقط لپ‌تاپ‌های گرید A+ با بهترین کیفیت
- مشاوره: رایگان و تخصصی
- پشتیبانی: ۷ روز هفته
- شماره تماس: ۰۹۱۲۳۴۵۶۷۸۹

به سوالات کاربران درباره محصولات، قیمت‌ها، گارانتی و خدمات پاسخ دهید. پاسخ‌ها را کوتاه و مفید نگه دارید. به فارسی پاسخ دهید.`
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "تعداد درخواست‌ها بیش از حد مجاز است. لطفاً کمی صبر کنید." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "اعتبار سرویس به پایان رسیده است." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "خطا در پردازش درخواست" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Streaming response started");
    
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat function error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "خطای ناشناخته" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
