<div class="latest-post">
	<div class="post-image">
		<?php the_post_thumbnail('large-thumb'); ?>
	</div>

	<h2><a href="<?php the_permalink(); ?>" title="Read more"><?php the_title(); ?></a></h2>
	<span class="post-date"><?php the_date(); ?></span>

	<?php the_excerpt(); ?>
</div>