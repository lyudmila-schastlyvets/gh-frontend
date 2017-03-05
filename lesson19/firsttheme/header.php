<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package firsttheme
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<section class="hero">
		<header class="header">
			<div class="wrapper">
				<div class="left-part-header">
					<h1 class="logo"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><img src="<?php echo get_template_directory_uri() ?>/images/businessplus-logo.png" alt="<?php bloginfo( 'name' ); ?>"><?php bloginfo( 'name' ); ?></a></h1>
					<?php
					$description = get_bloginfo( 'description', 'display' );
					if ( $description || is_customize_preview() ) : ?>
						<a class="link-call" href="tel: <?php echo $description; /* WPCS: xss ok. */ ?>"><img src="<?php echo get_template_directory_uri() ?>/images/phone-icon.png" alt="phone"><?php echo $description; /* WPCS: xss ok. */ ?></a>
					<?php
					endif; ?>
				</div><!-- logo -->
				<div class="menuIcon">
					<a href="#menuExpand"><i class="fa fa-bars" aria-hidden="true"></i></a>
				</div>
				<nav class="main-nav">
					<?php wp_nav_menu( array( 'theme_location' => 'menu-1', 'menu_class' => 'navigation menu', 'container'=> '' ) ); ?>
				</nav>
			</div>
		</header>
		<?php if (is_front_page()) : ?>
		<div class="fade_slide">
			<div class="slide-content slide-content-1">
				<div class="wrapper">
					<div class="hero-content">
						<div class="content">
							<span>Welcome to</span>
							<h1 class="main-title">Business plus</h1>
							<p class="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry
								Lorem Ipsum has been the industry's standard dummy text ever.</p>
							<a href="#" class="cta-button button-more">Read more</a>
						</div>
					</div>
				</div>
			</div>
			<div class="slide-content slide-content-2">
				<div class="wrapper">
					<div class="hero-content">
						<div class="content">
							<span>Welcome to</span>
							<h1 class="main-title">Business plus2</h1>
							<p class="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry
								Lorem Ipsum has been the industry's standard dummy text ever.</p>
							<a href="#" class="cta-button button-more">Read more</a>
						</div>
					</div>
				</div>
			</div>
			<div class="slide-content slide-content-3">
				<div class="wrapper">
					<div class="hero-content">
						<div class="content">
							<span>Welcome to</span>
							<h1 class="main-title">Business plus3</h1>
							<p class="description">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry
								Lorem Ipsum has been the industry's standard dummy text ever.
							</p>
							<a href="#" class="cta-button button-more">Read more</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php endif; ?>

			</section>
