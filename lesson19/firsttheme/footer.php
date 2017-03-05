<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package firsttheme
 */

?>

<footer class="footer">
	<div class="container">
		<div class="row">
			<div class="footer-main-info col-xs-12 col-md-4">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="footer-logo"><img src="<?php echo get_template_directory_uri() ?>/images/businessplus-logo.png" alt="<?php bloginfo( 'name' ); ?>"></a>
				<span class="copyright">2015 © lawyer.</span>
				<ul class="footer-social-links">
					<li><a href="#" class="facebook-icon"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
					<li><a href="#" class="twitter-icon"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
					<li><a href="#" class="google-icon"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
					<li><a href="#" class="linked-icon"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
				</ul>
			</div>
			<div class="footer-nav col-xs-12 col-sm-4 col-md-3">
				<h3 class="footer-title">Navigation</h3>
				<?php wp_nav_menu( array( 'theme_location' => 'menu-2', 'menu_class' => 'footer-navigation', 'container'=>  false, 'link_before' => '<i class="fa fa-caret-right" aria-hidden="true"></i>' ) ); ?>
			</div>
			<div class="footer-contact col-xs-12 col-sm-8 col-md-5">
				<h3 class="footer-title">Quick contact Us</h3>
				<form class="footer-form" action="#" method="post">
					<ul>
						<li class="input-field">
							<input type="text" id="name" required>
							<label for="name">Name </label>
						</li>
						<li class="input-field">
							<input type="email" id="email" required>
							<label for="email">Email </label>
						</li>
						<li class="textarea-field">
							<textarea name="comment" id="comment" required></textarea>
							<label for="comment">Comment </label>
						</li>
						<li><button type="submit" class="button-more">Submit Now</button></li>
					</ul>
				</form>
			</div>
		</div>
	</div>
</footer>

<?php wp_footer(); ?>

</body>
</html>
