<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="css/reset.css">
	<link rel="stylesheet" type="text/css" href="css/960_12_col.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<title>Yasodara Córdova</title>
</head>
<body>
	<div id="wrapper">
		<div id="header">
			<div class="container_12">

				<div class="grid_12">
					<img src="img/logo.png" />
				</div>
				<div class="grid_12">
					<ul id="main-menu">

						<?php 

						$active = $active ? $active : 'work';


						function try_active($try) {

							if($try == $GLOBALS['active']) {
								echo 'active';
							} 
						}


						?>
						<li><a href="work.php" class="<?php try_active('work'); ?>">work</a></li>
						<li><a href="bio.php" class="<?php try_active('bio'); ?>">bio</a></li>
						<li><a href="resume.php" class="<?php try_active('resume'); ?>">resume</a></li>
						<li><a href="projects.php" class="<?php try_active('projects'); ?>">projects</a></li>
						<li><a href="publications.php" class="<?php try_active('publications'); ?>">publications</a></li>
						<li><a href="talks.php" class="<?php try_active('talks'); ?>">talks</a></li>
					</ul>
				</div>

			</div>

			<div class="divisor"></div>
		</div>

		<div id="content">
			<div class="container_12">
