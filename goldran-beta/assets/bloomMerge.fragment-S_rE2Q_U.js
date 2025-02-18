import{S as o}from"./Screen-hPtYg6u8.js";import"./index-6otOD423.js";const r="bloomMergePixelShader",e=`uniform sampler2D textureSampler;uniform sampler2D bloomBlur;varying vec2 vUV;uniform float bloomWeight;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{gl_FragColor=texture2D(textureSampler,vUV);vec3 blurred=texture2D(bloomBlur,vUV).rgb;gl_FragColor.rgb=gl_FragColor.rgb+(blurred.rgb*bloomWeight); }
`;o.ShadersStore[r]=e;const m={name:r,shader:e};export{m as bloomMergePixelShader};
