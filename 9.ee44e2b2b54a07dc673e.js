(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{jctj:function(e,n){function a(e){return e?"string"==typeof e?e:e.source:null}function s(e){return t("(?=",e,")")}function t(...e){return e.map(e=>a(e)).join("")}function i(...e){return"("+e.map(e=>a(e)).join("|")+")"}e.exports=function(e){const n=t(/[A-Z_]/,t("(",/[A-Z0-9_.-]+:/,")?"),/[A-Z0-9_.-]*/),a={className:"symbol",begin:"&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;"},c={begin:"\\s",contains:[{className:"meta-keyword",begin:"#?[a-z_][a-z1-9_-]+",illegal:"\\n"}]},r=e.inherit(c,{begin:"\\(",end:"\\)"}),l=e.inherit(e.APOS_STRING_MODE,{className:"meta-string"}),g=e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"}),m={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[a]},{begin:/'/,end:/'/,contains:[a]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:"<![a-z]",end:">",relevance:10,contains:[c,g,l,r,{begin:"\\[",end:"\\]",contains:[{className:"meta",begin:"<![a-z]",end:">",contains:[c,r,g,l]}]}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<!\\[CDATA\\[",end:"\\]\\]>",relevance:10},a,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",begin:"<style(?=\\s|>)",end:">",keywords:{name:"style"},contains:[m],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>)",end:">",keywords:{name:"script"},contains:[m],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:t(/</,s(t(n,i(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:m}]},{className:"tag",begin:t(/<\//,s(t(n,/>/))),contains:[{className:"name",begin:n,relevance:0},{begin:/>/,relevance:0}]}]}}}}]);