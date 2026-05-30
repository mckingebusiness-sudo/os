# LifeOS

نظام تشغيل شخصي للحياة — خصوصية أولًا، مجاني للأبد، يعمل دون اتصال، عربي أولًا (RTL) وواجهة داكنة.

## النظرة المعمارية
- Monorepo بـ pnpm + Turborepo
- `apps/web` — موقع Next.js (App Router) داكن RTL عربي أولًا
- `packages/shared` — أدوات مشتركة (Clock, ULID, Money in cents)

## القوانين الأساسية (Invariants)
- المعرّفات ULID (لا UUID/SERIAL)
- الأموال بالـ cents (BIGINT) + عملة CHAR(3)
- الوقت TIMESTAMPTZ بالـ UTC عبر `Clock`
- خصوصية: لا أسرار Vault/E2EE في AI/logs/search
- مجاني للأبد: لا paywall

## التشغيل
```bash
pnpm install
pnpm dev
```

## الترخيص
AGPL-3.0
