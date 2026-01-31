<?php
$format = new IntlDateFormatter(
    'af_ZA',
    IntlDateFormatter::NONE,
    IntlDateFormatter::NONE,
    'Africa/Johannesburg',
    IntlDateFormatter::GREGORIAN,
    "hh:mm a"
);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $format->format(time()); ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Funnel+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
	<h1 id="tyd">
    <?= $format->format(time()); ?>
	</h1>
    </main>
   
    <script src="script.js"></script>
</body>
</html>
