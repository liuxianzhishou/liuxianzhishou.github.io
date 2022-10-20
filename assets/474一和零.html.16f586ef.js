import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o as c,c as u,a as n,b as p,w as t,d as s,e as l}from"./app.5aebcaaa.js";var i="/assets/img_21.2134f806.png",k="/assets/img_20.5cac090a.png";const r={},d=n("h1",{id:"_474-\u4E00\u548C\u96F6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_474-\u4E00\u548C\u96F6","aria-hidden":"true"},"#"),s(" \u{1F315}\u{1F315}\u{1F317} 474. \u4E00\u548C\u96F6")],-1),m=n("p",null,"\u96BE\u5EA6: \u{1F315} \u{1F315} \u{1F317}",-1),v={class:"table-of-contents"},b=s("\u95EE\u9898\u63CF\u8FF0"),_=s("\u89E3\u6CD5"),h=s("\u8F93\u51FA"),y=l('<h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+i+`" alt="img_21.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findMaxForm</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strs<span class="token punctuation">,</span> <span class="token keyword">int</span> m<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u80CC\u5305\u95EE\u9898</span>
        <span class="token comment">// dp[i] = dp[i - nums[j]] + 1, dp[i]</span>
        <span class="token comment">// \u7EDF\u8BA1\u6BCF\u4E2A\u5B57\u7B26\u4E32\u7684 0 &amp; 1 \u4E2A\u6570</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> strs<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> s <span class="token operator">=</span> strs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> tmp <span class="token operator">=</span> <span class="token function">zeros</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
            array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// dp</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// \u5F80\u80CC\u5305\u4E2D\u4E00\u4E2A\u4E2A\u653E\u5165\u7269\u54C1\u8FDB\u884C\u5C1D\u8BD5</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5F53\u80CC\u5305\u7684\u5BB9\u91CF\u964D\u4F4E\u5230\u67D0\u79CD\u7A0B\u5EA6\u4E4B\u540E\uFF0C\u518D\u5C0F\u7684\u5BB9\u91CF\u80AF\u5B9A\u4E5F\u653E\u4E0D\u4E0B\u8BE5\u7269\u54C1\u4E86\uFF0C\u56E0\u6B64\u5373\u4F7F\u6B62\u635F</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> p <span class="token operator">=</span> m<span class="token punctuation">;</span> p <span class="token operator">-</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> p <span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> q <span class="token operator">=</span> n<span class="token punctuation">;</span> q <span class="token operator">-</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> q <span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    dp<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span>q<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span>q<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>p <span class="token operator">-</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">[</span>q <span class="token operator">-</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> dp<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">zeros</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">char</span> c <span class="token operator">:</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token char">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+k+'" alt="img_20.png"></p>',8);function w(f,g){const a=e("RouterLink");return c(),u("div",null,[d,m,n("nav",v,[n("ul",null,[n("li",null,[p(a,{to:"#\u95EE\u9898\u63CF\u8FF0"},{default:t(()=>[b]),_:1})]),n("li",null,[p(a,{to:"#\u89E3\u6CD5"},{default:t(()=>[_]),_:1})]),n("li",null,[p(a,{to:"#\u8F93\u51FA"},{default:t(()=>[h]),_:1})])])]),y])}var q=o(r,[["render",w],["__file","474\u4E00\u548C\u96F6.html.vue"]]);export{q as default};
