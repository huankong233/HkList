<?php ?><?php //v2 HkList Parsers ?><?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');
