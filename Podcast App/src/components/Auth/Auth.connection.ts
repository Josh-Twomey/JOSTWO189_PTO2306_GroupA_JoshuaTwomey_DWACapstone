import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://hzzrysdlytckseaafymp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6enJ5c2RseXRja3NlYWFmeW1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxNDYzODcsImV4cCI6MjAzMjcyMjM4N30.VQfbvCoS0eZVnh9O5P23d9LmjH2uTcCleIlce3z349o"
);
