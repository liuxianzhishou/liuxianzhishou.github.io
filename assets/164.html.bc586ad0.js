import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.5aebcaaa.js";var t="/assets/img_1.14c3be26.png",e="/assets/img.23b9fa7e.png";const o={},c=p('<h1 id="_164-\u6700\u5927\u95F4\u8DDD" tabindex="-1"><a class="header-anchor" href="#_164-\u6700\u5927\u95F4\u8DDD" aria-hidden="true">#</a> \u{1F315}\u{1F315}\u{1F317} 164. \u6700\u5927\u95F4\u8DDD</h1><p>\u96BE\u5EA6: \u{1F315}\u{1F315}\u{1F317}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+t+`" alt="img_1.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">maximumGap</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u6876\u6392\u5E8F </span>
        <span class="token comment">// \u6876\u7684\u4E2A\u6570\u975E\u6570\u7EC4\u957F\u5EA6\uFF0C\u8FD9\u6837\u5BB9\u6613\u51FA\u73B0\u7279\u5927\u7684\u6570\u5728\u4E00\u4E2A\u5C0F\u7684\u4E0B\u6807\u524D\u9762\uFF0C\u9700\u8981\u7EF4\u62A4\u5404\u4E2A\u4E0B\u6807\u7684\u94FE\u8868\uFF0C\u548C\u524D\u540E\u94FE\u8868\u7684\u6570\u6BD4\u8F83\u624D\u53EF\u5224\u65AD</span>
        <span class="token comment">// \u6876\u7684\u4E2A\u6570\u7531\u95F4\u8DDD\u786E\u5B9A\uFF0C\u53EF\u4EE5\u770B\u51FA\uFF0C\u82E5\u662F\u6240\u6709\u6570\u5747\u7B49\u95F4\u8DDD\u6392\u5217\uFF0C\u5219 step == (max - min) / (len - 1) </span>
        <span class="token comment">// \u53EA\u8981\u6709\u4E00\u4E2A\u4E0D\u7B49\u95F4\u8DDD\u6392\u5217\uFF0C\u90A3\u4E48\u5FC5\u6709\u4E00\u4E2A\u6700\u5C0F\u503C\uFF0C\u548C\u5BF9\u5E94\u7684\u6700\u5927\u503C\uFF0C\u56E0\u6B64 max step &gt; (max - min) / (len - 1)</span>
        <span class="token comment">// \u6876\u4E2A\u6570 == (max - min) / (step + 1) \uFF0C\u5C3D\u53EF\u80FD\u4FDD\u8BC1\u6570\u636E\u5728\u4E0D\u540C\u6876\u4E2D\uFF0Cmax step \u5FC5\u5360\u636E\u81F3\u5C11 2 \u4E2A\u6876\uFF0C</span>
        <span class="token comment">// \u5373\uFF0Cmax step \u53EA\u80FD\u5728\u76F8\u90BB\u975E\u7A7A\u6876\u4E2D\uFF0C\u8981\u4E48\u662F\u5F53\u524D\u6876\u548C\u524D\u9762\u7684\u67D0\u4E2A\u975E\u7A7A\u6876\uFF0C\u8981\u4E48\u662F\u548C\u540E\u9762\u7684\u67D0\u4E2A\u975E\u7A7A\u6876</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// len &gt; 2</span>
        <span class="token keyword">int</span> max <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> min <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            max <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            min <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>min<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>max <span class="token operator">==</span> min<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// max == min \u6240\u6709\u5143\u7D20\u503C\u76F8\u7B49</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">int</span> step <span class="token operator">=</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>step <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            step <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u524D\u9762\u5DF2\u7ECF\u8BC1\u660E\u8FC7 max != min\uFF0C\u82E5 step \u4ECD == 0 \u8BF4\u660E\u5206\u5B50\u8FC7\u5C0F\uFF0C\u5206\u6BCD\u8FC7\u5927\u4F46\u4ECD &lt; len</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min<span class="token punctuation">)</span> <span class="token operator">/</span> step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token comment">// \u521B\u5EFA\u6876</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bucket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>size<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u53EA\u9700\u8981\u4FDD\u7559\u4E0B\u6807\u4E0B min &amp; max\uFF0C\u80AF\u5B9A\u4E0D\u4F1A\u51FA\u73B0\u7279\u5927\u503C\u5206\u914D\u5728\u8BE5\u6876\u4E2D\u7684\u60C5\u51B5</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>bucket<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> min<span class="token punctuation">)</span> <span class="token operator">/</span> step<span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>bucket<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u8BF4\u660E\u8FD8\u6CA1\u6709\u5143\u7D20\u5728\u91CC\u9762</span>
                bucket<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
                bucket<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                bucket<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>bucket<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                bucket<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>bucket<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u904D\u5386\u6876</span>
        <span class="token comment">// System.out.println(Arrays.toString(bucket[0]));</span>
        <span class="token comment">// System.out.println(Arrays.toString(bucket[33]));</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cur <span class="token operator">=</span> bucket<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token comment">// \u6BCF\u6B21\u548C\u540E\u9762\u7684\u975E\u7A7A\u6876\u6BD4\u8F83</span>
            <span class="token keyword">int</span> next <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>next <span class="token operator">&lt;</span> size <span class="token operator">&amp;&amp;</span> bucket<span class="token punctuation">[</span>next<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                next <span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>next <span class="token operator">==</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> res<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// \u5F53\u524D\u6876\u7684\u6700\u5927\u503C &amp; \u4E0B\u4E00\u4E2A\u6876\u7684\u6700\u5C0F\u503C \u6BD4\u8F83</span>
            <span class="token keyword">int</span> diff <span class="token operator">=</span> bucket<span class="token punctuation">[</span>next<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> cur<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            res <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> diff<span class="token punctuation">)</span><span class="token punctuation">;</span>
            i <span class="token operator">=</span> next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+e+'" alt="img.png"></p>',10),l=[c];function i(u,k){return s(),a("div",null,l)}var m=n(o,[["render",i],["__file","164.html.vue"]]);export{m as default};