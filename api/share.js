export default function handler(req, res) {
  res.status(200);
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");

  res.end(`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <title>Institut de beauté Vegan & Cruelty-Free à Montbert</title>

  <meta name="description" content="Institut de beauté vegan à Montbert, Secret of Beauty propose des soins éthiques et cruelty-free pour sublimer votre peau." />

  <link rel="canonical" href="https://secretofbeauty.fr/" />

  <meta property="og:title" content="Institut de beauté Vegan & Cruelty-Free à Montbert" />
  <meta property="og:description" content="Institut de beauté vegan à Montbert, Secret of Beauty propose des soins éthiques et cruelty-free pour sublimer votre peau." />
  <meta property="og:image" content="https://secretofbeauty.fr/NewAssetSecretOfBeauty/partageV2.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="https://secretofbeauty.fr/api/share" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Institut de beauté Vegan & Cruelty-Free à Montbert" />
  <meta name="twitter:description" content="Institut de beauté vegan à Montbert, Secret of Beauty propose des soins éthiques et cruelty-free pour sublimer votre peau." />
  <meta name="twitter:image" content="https://secretofbeauty.fr/NewAssetSecretOfBeauty/partageV2.jpg" />
</head>
<body></body>
</html>`);
}