import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.5aebcaaa.js";var t="/assets/img_1.02aed231.png",o="/assets/img.25ecab43.png";const e={},c=p('<h1 id="_79-\u5355\u8BCD\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#_79-\u5355\u8BCD\u641C\u7D22" aria-hidden="true">#</a> \u{1F315} 79. \u5355\u8BCD\u641C\u7D22</h1><p>\u96BE\u5EA6: \u{1F315}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+t+`" alt="img_1.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">exist</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> board<span class="token punctuation">,</span> <span class="token class-name">String</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u56DE\u6EAF</span>
        <span class="token keyword">int</span> row <span class="token operator">=</span> board<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span> col <span class="token operator">=</span> board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> word<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> row<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> col<span class="token punctuation">;</span> j <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> word<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">mySol</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> word<span class="token punctuation">,</span> row<span class="token punctuation">,</span> col<span class="token punctuation">,</span> len<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">boolean</span> <span class="token function">mySol</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> board<span class="token punctuation">,</span> <span class="token class-name">String</span> word<span class="token punctuation">,</span> <span class="token keyword">int</span> row<span class="token punctuation">,</span> <span class="token keyword">int</span> col<span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u9012\u5F52\u7EC8\u6B62\u6761\u4EF6</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> i <span class="token operator">&gt;=</span> row <span class="token operator">||</span> j <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">&gt;=</span> col<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>word<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">!=</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">==</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// index &lt; len - 1</span>
        <span class="token keyword">char</span> cur <span class="token operator">=</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;#&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u505A\u6807\u8BB0\u53BB\u91CD</span>
        <span class="token keyword">boolean</span> res <span class="token operator">=</span> <span class="token function">mySol</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> word<span class="token punctuation">,</span> row<span class="token punctuation">,</span> col<span class="token punctuation">,</span> len<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span> 
                <span class="token operator">||</span> <span class="token function">mySol</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> word<span class="token punctuation">,</span> row<span class="token punctuation">,</span> col<span class="token punctuation">,</span> len<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span>
                <span class="token operator">||</span> <span class="token function">mySol</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> word<span class="token punctuation">,</span> row<span class="token punctuation">,</span> col<span class="token punctuation">,</span> len<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
                <span class="token operator">||</span> <span class="token function">mySol</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> word<span class="token punctuation">,</span> row<span class="token punctuation">,</span> col<span class="token punctuation">,</span> len<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>res <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> res<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> cur<span class="token punctuation">;</span> <span class="token comment">// \u8FD8\u539F</span>
            <span class="token keyword">return</span> res<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+o+'" alt="img.png"></p>',10),l=[c];function u(i,k){return s(),a("div",null,l)}var v=n(e,[["render",u],["__file","79.html.vue"]]);export{v as default};