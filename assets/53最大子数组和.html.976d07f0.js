import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as c,c as l,a as n,b as t,w as p,d as s,e as i}from"./app.5aebcaaa.js";var u="/assets/img_18.6f725485.png",r="/assets/img_17.0ef7c48f.png";const k={},d=n("h1",{id:"_53-\u6700\u5927\u5B50\u6570\u7EC4\u548C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_53-\u6700\u5927\u5B50\u6570\u7EC4\u548C","aria-hidden":"true"},"#"),s(" \u{1F317} 53. \u6700\u5927\u5B50\u6570\u7EC4\u548C")],-1),m=n("p",null,"\u96BE\u5EA6: \u{1F317}",-1),v={class:"table-of-contents"},_=s("\u95EE\u9898\u63CF\u8FF0"),h=s("\u89E3\u6CD5 1"),b=s("\u8F93\u51FA 1"),f=i('<h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+u+`" alt="img_18.png"></p><hr><h3 id="\u89E3\u6CD5-1" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-1" aria-hidden="true">#</a> \u89E3\u6CD5 1</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">maxSubArray</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// dp[i] = dp[i - 1] + [i], [i]</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token comment">// \u7279\u6B8A\u60C5\u51B5\u7279\u5224</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// len &gt; 1</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// \u521D\u59CB\u5316</span>
        dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// dp</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            res <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-1" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-1" aria-hidden="true">#</a> \u8F93\u51FA 1</h3><p><img src="`+r+'" alt="img_17.png"></p><hr>',9);function w(g,y){const a=o("RouterLink");return c(),l("div",null,[d,m,n("nav",v,[n("ul",null,[n("li",null,[t(a,{to:"#\u95EE\u9898\u63CF\u8FF0"},{default:p(()=>[_]),_:1})]),n("li",null,[t(a,{to:"#\u89E3\u6CD5-1"},{default:p(()=>[h]),_:1})]),n("li",null,[t(a,{to:"#\u8F93\u51FA-1"},{default:p(()=>[b]),_:1})])])]),f])}var V=e(k,[["render",w],["__file","53\u6700\u5927\u5B50\u6570\u7EC4\u548C.html.vue"]]);export{V as default};
