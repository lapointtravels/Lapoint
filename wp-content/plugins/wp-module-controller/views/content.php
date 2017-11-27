<?php
global $kmc_sections, $current_section;
?>

<div class="kmc-sections">
	<?php foreach ($kmc_sections as $kmc_section) :
		$current_section = $kmc_section; ?>
		<section  <?php
		$colored = false;
		echo "style='";
		if ($kmc_section->settings) :
			if ($kmc_section->settings->background_color) :
				$colored = true;
				echo "background-color: " . $kmc_section->settings->background_color . ";";
			endif;
			if ($kmc_section->settings->background_image || $kmc_section->settings->background_video_ogv || $kmc_section->settings->background_video_mp4) :
				$colored = true;
			endif;
			if ($kmc_section->settings->color) :
				echo "color: " . $kmc_section->settings->color . ";";
			endif;
			if ($kmc_section->settings->css) :
				echo str_replace("\n", " ", $kmc_section->settings->css);
			endif;
		endif;
		echo "'";
		?>
		class="kmc-section <?php
		echo $kmc_section->settings->color_class;

		if ($kmc_section->settings->background_image) :
			echo " has-bgr-img";
		endif;

		if ($kmc_section->settings->background_video_ogv || $kmc_section->settings->background_video_mp4) :
			echo " has-bgr-video";
		endif;

		if ($kmc_section->settings->extra_class) :
			echo " " . $kmc_section->settings->extra_class;
		endif;

		if ($colored) :
			echo " col";
		else:
			echo " no-col";
		endif;

		if ($kmc_section->settings->top_padding) :
			echo " pt-" . $kmc_section->settings->top_padding;
		endif;
		if ($kmc_section->settings->bottom_padding) :
			echo " pb-" . $kmc_section->settings->bottom_padding;
		endif;
		if ($kmc_section->settings->top_margin) :
			echo " mt-" . $kmc_section->settings->top_margin;
		endif;
		if ($kmc_section->settings->bottom_margin) :
			echo " mb-" . $kmc_section->settings->bottom_margin;
		endif;

		?>"
		<?php
		if ($kmc_section->settings->name) :
			echo " name='" . $kmc_section->settings->name . "'";
		endif;
		?>>

			<?php
			if ($kmc_section->settings->background_image) :
				echo "<div class='responsive-image section-background' style='";
				if ($kmc_section->settings->background_image->size == "cover") :
					echo ' background-size: cover;';
				elseif ($kmc_section->settings->background_image->size == "repeat") :
					echo ' background-repeat: repeat;';
				else:
					echo ' background-size: contain;';
				endif;
				echo "'";
				if (property_exists($kmc_section->settings->background_image, 'image_2500') && $kmc_section->settings->background_image->image_2500) :
					echo " data-src-sm='" . $kmc_section->settings->background_image->image_2500 . "'";
				elseif (property_exists($kmc_section->settings->background_image, 'image_1200') && $kmc_section->settings->background_image->image_1200) :
					echo " data-src-sm='" . $kmc_section->settings->background_image->image_1200 . "'";
				elseif (property_exists($kmc_section->settings->background_image, 'full') && $kmc_section->settings->background_image->full) :
					echo " data-src-sm='" . $kmc_section->settings->background_image->full . "'";
				endif;
				if (property_exists($kmc_section->settings->background_image, 'image_1200') && $kmc_section->settings->background_image->image_1200) :
					echo " data-src-xs='" . $kmc_section->settings->background_image->image_1200 . "'";
				endif;
				echo "></div>";
			endif;
			?>

			<?php
			if ($kmc_section->settings->background_video_ogv || $kmc_section->settings->background_video_mp4) :
				echo '<div class="background-video">';
				echo '<video autoplay loop muted>';
				if ($kmc_section->settings->background_video_ogv) :
					echo '<source src="' . $kmc_section->settings->background_video_ogv->url . '" type="video/ogv">';
				endif;
				if ($kmc_section->settings->background_video_mp4) :
					echo '<source src="' . $kmc_section->settings->background_video_mp4->url . '" type="video/mp4">';
				endif;
				echo '</video>';
				echo '</div>';
			endif;
			?>


			<?php
			foreach ($kmc_section->components as $kmc_component) : ?>
				<div class="kmc-component kmc-component-<?php echo $kmc_component->type; ?> <?php
					if ($kmc_component->settings->top_padding) :
						echo " pt-" . $kmc_component->settings->top_padding;
					endif;
					if ($kmc_component->settings->bottom_padding) :
						echo " pb-" . $kmc_component->settings->bottom_padding;
					endif;
					if ($kmc_component->settings->top_margin) :
						echo " mt-" . $kmc_component->settings->top_margin;
					endif;
					if ($kmc_component->settings->bottom_margin) :
						echo " mb-" . $kmc_component->settings->bottom_margin;
					endif;
					?>"<?php
					$component_style = $kmc_component->get_style();
					if ($component_style):
						echo ' style="' . $component_style . '";';
					endif;
					if ($kmc_component->settings->animation) :
						echo " data-animated='" . $kmc_component->settings->animation ."'";
					endif;
					if ($kmc_component->settings->animation_delay) :
						echo " data-delay='" . $kmc_component->settings->animation_delay ."'";
					endif;
					?>>

					<?php if ($kmc_component->auto_contained && $kmc_component->is_contained) : ?>
						<div class="<?php echo $kmc_component->get_container_class(); ?>">
					<?php endif; ?>

					<?php echo $kmc_component->render(); ?>

					<?php if ($kmc_component->auto_contained && $kmc_component->is_contained) : ?>
						</div>
					<?php endif; ?>

				</div>
			<?php endforeach; ?>
		</section>
	<?php endforeach; ?>
</div>
