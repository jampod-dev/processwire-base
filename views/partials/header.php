<!doctype html>

<html class="" lang="en">

	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />

		<title><?php echo $page->get("headline|title"); ?></title>

		<meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1">
		<?php if ($config->environment == 'production') : ?>
			<link rel="stylesheet" type="text/css" href="<?php echo $config->urls->templates?>css/style.min.css" />
		<?php else : ?>
			<link rel="stylesheet" type="text/css" href="<?php echo $config->urls->templates?>css/style.min.css?v=<?= time() ?>" />
		<?php endif; ?>

	</head>
	<body>

		<div id="content" class="content">

			<div class="container">

				<main role="main" id="main">  

