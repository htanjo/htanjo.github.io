import{S as t}from"./Screen-Bl-8DfGB.js";import"./index-DzLpNkGY.js";const e="passPixelShader",r=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}`;t.ShadersStoreWGSL[e]=r;const S={name:e,shader:r};export{S as passPixelShaderWGSL};
