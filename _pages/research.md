---
layout: archive
title: "My research"
permalink: /research/
author_profile: true
---


My research focuses on radio transients, specifically Fast Radio Bursts. I have been lucky enough to be part of the CRAFT project since the early times of the project. CRAFT uses ASKAP to search and localise FRBs. Our team has made various achievements and discoveries, including the first real-time localisation of a single FRB event.

## Commissioning of ASKAP/CRAFT and Transient search software
At the start of my PhD I conducted a series of FRB injection tests to assess and improve the performance of the CRAFT FRB pipeline. 
The core software is a GPU based fast dedispersion searching pipeline called FREDDA, an implementation of the [FDMT](https://ui.adsabs.harvard.edu/abs/2017ApJ...835...11Z/abstract) algorithm written in CUDA.
FREDDA has been a very successful pipeline, contributing to the discovery of more than 50 FRBs by ASKAP between 2017-2021 and [the first localisation of a non-repeating FRB](https://ui.adsabs.harvard.edu/abs/2019Sci...365..565B/abstract)
You can check out this paper for the systematic performance of FREDDA and HEIMDALL, two well known pipelines.

# CRAFT-GP: A 10-hour Galactic Plane Single Pulse Survey

This is a single pulse search using eight ASKAP antennas as single dishes to provide a rapid 10-hour observation covering the entire southern Galactic plane between b<±7 degrees. During this survey, we detected one FRB 180430 in the anti-Galactic-centre direction and a collection of single pulses from several radio pulsars.

The fun part of the observation was utilising the ASKAP Phased Array Feeds to tile the survey and also adjusting the pre axis roll of the dishes of the telescope.
You can see the beautiful "rainbow road" in this figure below.

![test image](/images/500x300.png 'Test')

[Link to paper](https://ui.adsabs.harvard.edu/abs/2019MNRAS.486..166Q/abstract)
# Pulse Profile Analysis of FRBs and Scatter Broadening in the ASKAP FRB population

I developed a pulse fitting program to analyse the dynamic spectrum of dispersed radio pulses.
We've been utilising this code to measure the pulse properties of ASKAP FRBs, confirm the dispersion measure and also dissect possible multi-component structures using Bayesian statistics such as FRB 180924 and FRB 190608 in high time resolution data [(Day et al. 2020)](https://ui.adsabs.harvard.edu/abs/2020MNRAS.497.3335D/abstract).

![test image](/images/500x300.png 'Test')

Playing with Bayesian statistics, I also used the scatter broadening time scale and other pulse properties to discuss the scattering screen locations and implications of FRBs as probes at extragalactic scales.


## X-ray transients in the 3XMM Catalogue
I am also interested in X-ray transients, I discovered one X-ray binary from my undergraduate thesis work in Nanjing University. 
You can check out this Symbiotic X-ray Binary [here](https://ui.adsabs.harvard.edu/abs/2017ApJ...847...44Q/abstract).
