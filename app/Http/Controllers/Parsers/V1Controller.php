<?php ?><?php //v2 HkList Parsers ?><?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');
