import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o as c,c as l,a as n,b as p,w as t,d as s,e as i}from"./app.5aebcaaa.js";var u="/assets/img_23.f2e760b9.png",r="/assets/img_22.2b8481a7.png";const k={},d=n("h1",{id:"_115-\u4E0D\u540C\u7684\u5B50\u5E8F\u5217",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_115-\u4E0D\u540C\u7684\u5B50\u5E8F\u5217","aria-hidden":"true"},"#"),s(" \u{1F317} 115. \u4E0D\u540C\u7684\u5B50\u5E8F\u5217")],-1),m=n("p",null,"\u96BE\u5EA6: \u{1F317}",-1),v={class:"table-of-contents"},b=s("\u95EE\u9898\u63CF\u8FF0"),_=s("\u89E3\u6CD5"),h=s("\u8F93\u51FA"),w=i('<h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+u+`" alt="img_23.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">numDistinct</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token class-name">String</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// dp[i][j] = dp[i - 1][j] -- \u5F53\u524D s \u4E2D\u7684\u5B57\u7B26\u4E0D\u7B97</span>
        <span class="token comment">// dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1]</span>
        <span class="token keyword">int</span> rows <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> cols <span class="token operator">=</span> t<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u7279\u6B8A\u60C5\u51B5\u7279\u5224</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>rows <span class="token operator">&lt;</span> cols <span class="token operator">||</span> rows <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> cols <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>rows <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>cols <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// \u521D\u59CB\u5316</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> rows<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> rows<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> cols<span class="token punctuation">;</span> j <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> m <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> n <span class="token operator">=</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token operator">==</span> t<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> dp<span class="token punctuation">[</span>rows<span class="token punctuation">]</span><span class="token punctuation">[</span>cols<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+r+'" alt="img_22.png"></p>',8);function f(y,g){const a=e("RouterLink");return c(),l("div",null,[d,m,n("nav",v,[n("ul",null,[n("li",null,[p(a,{to:"#\u95EE\u9898\u63CF\u8FF0"},{default:t(()=>[b]),_:1})]),n("li",null,[p(a,{to:"#\u89E3\u6CD5"},{default:t(()=>[_]),_:1})]),n("li",null,[p(a,{to:"#\u8F93\u51FA"},{default:t(()=>[h]),_:1})])])]),w])}var N=o(k,[["render",f],["__file","115\u4E0D\u540C\u7684\u5B50\u5E8F\u5217.html.vue"]]);export{N as default};
