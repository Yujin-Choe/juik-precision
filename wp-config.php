<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', '/juik0/www/wp-content/plugins/wp-super-cache/' );
define( 'DB_NAME', 'juik0' );

/** Database username */
define( 'DB_USER', 'juik0' );

/** Database password */
define( 'DB_PASSWORD', 'rewq43@!' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '. Iaj>F6}2Z*r$ME9wiwyCmUJDc^gX+Zx-KA)1PVwn2Ahy:9=IavWLQUDIaLmZpQ' );
define( 'SECURE_AUTH_KEY',  'DtE@ktOJ_v5a.MBlZDLHHM:Yt4EM-mB%`LO*.l`xrKGu3/Wdx77$nB[CEySH]M~9' );
define( 'LOGGED_IN_KEY',    'pLjOBx!:xEup6`qVZVoZbM]do#n]i.kr!`[nzRo~d}^J$omD/{nS^SNFg)*lxbXb' );
define( 'NONCE_KEY',        'JBT=/wLI-%W$RO= FS4w,bdyN,z6lzw6sWJ8|p|m^cf,S=,K1A!D(+w@Y%c._6R2' );
define( 'AUTH_SALT',        '_.y1gpgh!kU]86Vi(>Fl4Nkt3gb^<)]$e$SZX;cRY5/jww=wP0}M3%83_(zyp/]I' );
define( 'SECURE_AUTH_SALT', 'c0e^wW+=XW!.zJjj-HxXd`,wP6tHMzdo(_F!Uj86#lDNpZi1)/pe0?4[ ?|-AyT6' );
define( 'LOGGED_IN_SALT',   'Qh>AyA7K&;BHp!D-=x$_M;=Sj|,Ci]MQJ}sGVq@M-Ox[6])[~CxZ#AEd%xpqP;|y' );
define( 'NONCE_SALT',       'TW@*pskFk^+ng:|g6fXvI2M6nKwt>7(/8UOkEm@@4U-Sl,(>^uj9pZE< UV5G&Bn' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

/* custom security setting */
define('DISALLOW_FILE_EDIT',true);
define('IMAGE_EDIT_OVERWRITE',true);
define('EMPTY_TRASH_DAYS',7);

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

/* disble core major update */
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
