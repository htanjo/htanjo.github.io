import{S as t}from"./Screen-hPtYg6u8.js";import"./helperFunctions-BjS5X0t0.js";import"./index-6otOD423.js";const e="rgbdDecodePixelShader",r=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(textureSampler,textureSamplerSampler,input.vUV)),1.0);}`;t.ShadersStoreWGSL[e]=r;const p={name:e,shader:r};export{p as rgbdDecodePixelShaderWGSL};
