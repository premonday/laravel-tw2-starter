
@if(env('APP_ENV') !== 'production')
	<meta name="robots" content="noindex"> @endif

<title>{!! isset($title) ? $title : '' !!}</title>
<meta name="description" content="{!! isset($description) ? $description : '' !!}"/>
<meta property="og:image" content="{{ isset($image) ? $image : asset('img/meta/meta-pic.jpg') }}"/>
<meta property="og:type" content="{{ isset($pageType) ? $pageType : 'website' }}"/>
<meta property="og:description" content="{!! isset($description) ? $description : '' !!}"/>
<meta property="og:title" content="{!! isset($title) ? $title : '' !!}"/>
<meta name="twitter:title" content="{!! isset($title) ? $title : '' !!}"/>
<meta name="twitter:description" content="{!! isset($description) ? $description : '' !!}">

@php
	if(!isset($canonical)) {
	  $canonical = request()->url();
		if(basename(url()->full()) == 'index.php') {
			$canonical = config('app.url');
		}
	  } else {
	  $canonical = config('app.url').$canonical;
	}
@endphp

<link rel="canonical" href="{{ $canonical }}">


@yield('meta')
<link rel="icon" type="image/png" sizes="32x32" href="{{isset($favicon) ? $favicon : asset('img/meta/favicon.png')}}">
