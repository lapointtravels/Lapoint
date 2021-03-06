<?php

if (!function_exists('lapoint_header_image')) :

	function lapoint_header_image () {

		if (has_post_thumbnail()) :
			echo '<div class="full-image">';
			the_post_thumbnail("header-image");
			echo '</div>';
		endif;

	}

endif;


function get_wpml_home_url ($permalink) {
	
	// if WPML is running in mode to add language as query parameter. This would be true for staging and maybe local
	if( wpml_get_setting_filter(false, "language_negotiation_type") == "3" ) {
		// $parsed_url = parse_url( $permalink ); 
		// second time around this funciton is called ( yeah wp filters ) the permalink does not have a protocol 
		// because we remove it. so parse_url dont have a host which leads to the domain not being there and links get screwed up
		// so let's use WPML_HOME_URI and strip http or https from that
		$url = WPML_HOME_URI;
		return preg_replace("(^https?:)", "", $url ) . "/";
		//return preg_replace("(^https?://)", "", $url );
		return "//" . $parsed_url["host"] . "/";
		//return "https://www." . $parsed_url["host"] . "/";
	}

	if (strpos($permalink, "localhost")) {
		$homeUrl = WPML_HOME_URI;
		if (strpos($permalink, "/da/?")) {
    	$homeUrl = WPML_HOME_URI . "/da";
    } else if (strpos($permalink, "/nb/?")) {
    	$homeUrl = WPML_HOME_URI . "/nb";
    } else if (strpos($permalink, "/sv/?")) {
    	$homeUrl = WPML_HOME_URI . "/sv";
    }

    return $homeUrl;
	} 

	// If we are on production
	if( preg_match( '/lapointcamps.com|lapoint.dk|lapoint.no|lapoint.se/i' , $permalink) ) {

	  $homeUrl = "lapointcamps.com";
	  if (strpos($permalink, "lapoint.dk")) {
	  	$homeUrl = "lapoint.dk";
	  } else if (strpos($permalink, "lapoint.no")) {
	  	$homeUrl = "lapoint.no";
	  } else if (strpos($permalink, "lapoint.se")) {
	  	$homeUrl = "lapoint.se";
	  }
	  $homeUrl = "https://www." . $homeUrl . "/";
		
		return $homeUrl;
	}

	$parsed = parse_url( $permalink );

	return "http://" . $parsed["host"] . "/";
	return "https://www." . $parsed["host"] . "/";

}

function get_current_destination_type_booking_code() {

	global $post;

	$meta_data = get_post_meta($post->ID);

	
	if( $post->post_type == "destination-type" ) {
		return $meta_data["booking_code"][0];
	}

	if( $meta_data["destination_type"] ) {
		$bc = get_post_meta( $meta_data["destination_type"][0] );
		return $bc["booking_code"][0];
	}

	if( $meta_data["destination"] ) {
		$destination_meta = get_post_meta( $meta_data["destination"][0] );

		if( $destination_meta["destination_type"] ) {
			$bc = get_post_meta( $destination_meta["destination_type"][0] );
			return $bc["booking_code"][0];
		}

	}




	// We use SC (SurfCamps) as default
	return "SC";

}
