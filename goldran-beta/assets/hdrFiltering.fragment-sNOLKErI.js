import{S as e}from"./Screen-hPtYg6u8.js";import"./helperFunctions-UUoGgQL0.js";import"./hdrFilteringFunctions-cqRiOHHW.js";import"./index-6otOD423.js";const r="hdrFilteringPixelShader",i=`#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
uniform float alphaG;uniform samplerCube inputTexture;uniform vec2 vFilteringInfo;uniform float hdrScale;varying vec3 direction;void main() {vec3 color=radiance(alphaG,inputTexture,direction,vFilteringInfo);gl_FragColor=vec4(color*hdrScale,1.0);}`;e.ShadersStore[r]=i;const a={name:r,shader:i};export{a as hdrFilteringPixelShader};
