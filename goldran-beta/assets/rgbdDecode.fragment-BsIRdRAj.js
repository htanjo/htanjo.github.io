import{S as o}from"./Screen-Bl-8DfGB.js";import"./helperFunctions-BYcxCNM-.js";import"./index-DzLpNkGY.js";const e="rgbdDecodePixelShader",r=`varying vec2 vUV;uniform sampler2D textureSampler;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}`;o.ShadersStore[e]=r;const i={name:e,shader:r};export{i as rgbdDecodePixelShader};
