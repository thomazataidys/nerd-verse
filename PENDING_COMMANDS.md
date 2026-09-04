## Pending Commands — Correção do erro de build da Vercel (remoção de event handlers em Server Components)

### Install
```bash
none
```

### Run
```bash
git add .
git commit -m "fix(build): remove onError event handlers from Server Components to resolve Vercel build error"
git push origin main
```

### Notes
O erro na Vercel ocorria pela passagem de funções onError em Server Components durante a geração estática da página.
