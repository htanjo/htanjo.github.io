import{S as a}from"./Screen-Daz5AlYo.js";import"./helperFunctions-BHNgtAPE.js";import"./clipPlaneFragment-Dr_1GKBI.js";import"./index-C6tX8S9G.js";const e="glowMapGenerationPixelShader",i=`#if defined(DIFFUSE_ISLINEAR) || defined(EMISSIVE_ISLINEAR)
#include<helperFunctions>
#endif
#ifdef DIFFUSE
varying vUVDiffuse: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#ifdef OPACITY
varying vUVOpacity: vec2f;var opacitySamplerSampler: sampler;var opacitySampler: texture_2d<f32>;uniform var opacityIntensity: f32;
#endif
#ifdef EMISSIVE
varying vUVEmissive: vec2f;var emissiveSamplerSampler: sampler;var emissiveSampler: texture_2d<f32>;
#endif
#ifdef VERTEXALPHA
varying vColor: vec4f;
#endif
uniform glowColor: vec4f;uniform glowIntensity: f32;
#include<clipPlaneFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#include<clipPlaneFragment>
var finalColor: vec4f=uniforms.glowColor;
#ifdef DIFFUSE
var albedoTexture: vec4f=textureSample(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vUVDiffuse);
#ifdef DIFFUSE_ISLINEAR
albedoTexture=toGammaSpace(albedoTexture);
#endif
#ifdef GLOW
finalColor=vec4f(finalColor.rgb,finalColor.a*albedoTexture.a);
#endif
#ifdef HIGHLIGHT
finalColor=vec4f(finalColor.rgb,albedoTexture.a);
#endif
#endif
#ifdef OPACITY
var opacityMap: vec4f=textureSample(opacitySampler,opacitySamplerSampler,fragmentInputs.vUVOpacity);
#ifdef OPACITYRGB
finalColor=vec4f(finalColor.rgb,finalColor.a*getLuminance(opacityMap.rgb));
#else
finalColor=vec4f(finalColor.rgb,finalColor.a*opacityMap.a);
#endif
finalColor=vec4f(finalColor.rgb,finalColor.a*opacityIntensity);
#endif
#ifdef VERTEXALPHA
finalColor=vec4f(finalColor.rgb,finalColor.a*fragmentInputs.vColor.a);
#endif
#ifdef ALPHATEST
if (finalColor.a<ALPHATESTVALUE)
discard;
#endif
#ifdef EMISSIVE
var emissive: vec4f=textureSample(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vUVEmissive);
#ifdef EMISSIVE_ISLINEAR
emissive=toGammaSpace(emissive);
#endif
fragmentOutputs.color=emissive*finalColor*uniforms.glowIntensity;
#else
fragmentOutputs.color=finalColor*uniforms.glowIntensity;
#endif
#ifdef HIGHLIGHT
fragmentOutputs.color=vec4f(fragmentOutputs.color.rgb,uniforms.glowColor.a);
#endif
}`;a.ShadersStoreWGSL[e]=i;const n={name:e,shader:i};export{n as glowMapGenerationPixelShaderWGSL};
