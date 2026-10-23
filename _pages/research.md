---
layout: academic
title: Research
description: "Radio transients, ASKAP/CRAFT detection pipelines, FRB pulse analysis, and satellite interference research by Hao (Harry) Qiu."
permalink: /research/
active_nav: research
---

<div class="content-wrap page-content">
  <header class="page-heading"><p class="eyebrow">Research &amp; projects</p><h1>Finding signals.<br>Understanding the sky.</h1><p class="intro">My work connects transient astronomy, the tools we use to discover faint signals, and the radio environment that makes those discoveries possible.</p></header>
  <section class="research-section" id="satellites" aria-labelledby="satellites-title">
    <div><p class="eyebrow">01 / Spectrum &amp; satellites</p><h2 id="satellites-title">Protecting radio astronomy.</h2></div>
    <div class="research-body"><p>Satellite constellations are an increasingly important source of radio interference. At SKAO, I apply my experience in radio-frequency interference excision and fast transient detection to develop tools and analysis methods that help us understand and mitigate their impact.</p><p>I lead the development of <strong>SCEPTer</strong> — Simulating Constellation Emission Patterns for Telescopes — for SKA operations. It models satellite constellation interference and supports studies of radio astronomy protection.</p><p>SKAO co-hosts the IAU Centre for the Protection of the Dark and Quiet Sky from Satellite Constellation Interference (IAU CPS). This work supports our engagement with industry on the radio effects of constellations.</p><a class="text-link" href="{{ site.scepter_url }}">SCEPTer on GitLab <span aria-hidden="true">↗</span></a></div>
  </section>
  <section class="research-section" id="transients" aria-labelledby="transients-title">
    <div><p class="eyebrow">02 / Radio transients</p><h2 id="transients-title">The dynamic radio sky.</h2></div>
    <div class="research-body"><p>I’m interested in transients across a wide range of timescales: millisecond pulses from pulsars and fast radio bursts (FRBs), outbursts from X-ray binaries, and long-period transients. My current interests include X-ray binaries in image-domain surveys.</p><p>My Ph.D. research used the Australian SKA Pathfinder (ASKAP) to detect and analyse FRBs. I’m part of the Commensal Real-time ASKAP Fast Transients (CRAFT) project, led by Keith Bannister and Ryan Shannon. Our team’s work includes the first localisation of a non-repeating FRB to its host galaxy.</p><p>For the <strong>CRAFT Galactic Plane survey</strong>, we used eight ASKAP antennas as single dishes to carry out a rapid, ten-hour single-pulse survey of the southern Galactic plane at |b| &lt; 7°. The survey detected FRB 180430 and single pulses from several radio pulsars.</p><a class="text-link" href="https://ui.adsabs.harvard.edu/abs/2019MNRAS.486..166Q/abstract">Galactic Plane survey paper <span aria-hidden="true">↗</span></a><a class="text-link" href="https://ui.adsabs.harvard.edu/abs/2019Sci...365..565B/abstract">FRB localisation paper <span aria-hidden="true">↗</span></a></div>
  </section>
  <section class="research-section" id="methods" aria-labelledby="methods-title">
    <div><p class="eyebrow">03 / Detection &amp; analysis</p><h2 id="methods-title">From a pulse to a discovery.</h2></div>
    <div class="research-body"><p>During my Ph.D., I conducted FRB injection tests to assess and improve the CRAFT search pipeline. Its core software, <strong>FREDDA</strong>, is a GPU-based fast dedispersion pipeline implementing the Fast Dispersion Measure Transform in CUDA.</p><p>My work on FREDDA and HEIMDALL examined the systematic performance of two widely used FRB search pipelines, helping us understand how detection efficiency changes with pulse properties.</p><p>I also developed a pulse-fitting program to analyse the dynamic spectra of dispersed radio pulses. We used it to measure ASKAP FRB pulse properties, check dispersion measures, and investigate multi-component structures with Bayesian statistics. Measurements of scattering and pulse structure help explore where scattering occurs and how FRBs can probe material beyond our galaxy.</p><a class="text-link" href="https://ui.adsabs.harvard.edu/abs/2023MNRAS.523.5109Q/abstract">Search pipeline performance <span aria-hidden="true">↗</span></a><a class="text-link" href="https://ui.adsabs.harvard.edu/abs/2020MNRAS.497.3335D/abstract">ASKAP FRB pulse analysis <span aria-hidden="true">↗</span></a></div>
  </section>
  <section class="research-section" id="xray" aria-labelledby="xray-title">
    <div><p class="eyebrow">04 / X-ray astronomy</p><h2 id="xray-title">Transient discoveries across wavelengths.</h2></div>
    <div class="research-body"><p>My undergraduate thesis at Nanjing University searched for X-ray transients in the 3XMM Serendipitous Source Catalogue. This work led to the discovery of an X-ray binary and the study of its slowly rotating, 408-second X-ray pulsar, 3XMM J181923.7−170616.</p><p>This interest in X-ray binaries continues to inform my work on transients in radio image-domain surveys.</p><a class="text-link" href="https://ui.adsabs.harvard.edu/abs/2017ApJ...847...44Q/abstract">Read the X-ray pulsar paper <span aria-hidden="true">↗</span></a></div>
  </section>
  <a class="button" href="{{ '/publications/' | relative_url }}">Browse selected publications <span aria-hidden="true">→</span></a>
</div>
