/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SMTP_MAIL: string;
  readonly SMTP_PASSWORD: string;
  readonly SMTP_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
