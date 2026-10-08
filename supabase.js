
import { createClient } from
  'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL =
  'https://pqmjphmgtqxpomcwxezm.supabase.co';

const SUPABASE_PUBLISHABLE_KEY =
  'sb_publishable_X41oR_ApcEE-WkYeQgi9aw_rpCwgO6b';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
