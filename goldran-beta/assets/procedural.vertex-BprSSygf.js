import{S as i}from"./Screen-hPtYg6u8.js";import"./index-6otOD423.js";const e="proceduralVertexShader",t=`attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.vPosition=input.position;vertexOutputs.vUV=input.position*madd+madd;vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;i.ShadersStoreWGSL[e]=t;const r={name:e,shader:t};export{r as proceduralVertexShaderWGSL};
