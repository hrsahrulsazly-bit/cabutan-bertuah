// Sambungan Supabase (projek AWARD).
// anonKey = "anon public" / "publishable" key dari Supabase → Project Settings → API Keys.
// Kunci ini memang untuk pelayar dan selamat didedahkan; akses dikawal oleh RLS dalam supabase-setup.sql.
// JANGAN letak "service_role" / "secret" key di sini.
// Jika anonKey kosong, app jalan dalam mod satu peranti (localStorage).
window.CABUTAN_SUPABASE = {
  url: "https://sntwokzcoocpdeopcirg.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNudHdva3pjb29jcGRlb3BjaXJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIwNjYyNzAsImV4cCI6MjEwNzY0MjI3MH0.lX8eliCUf-oQb2f9iPXrvV-gLli3oErhPOvajVW40wE"
};
