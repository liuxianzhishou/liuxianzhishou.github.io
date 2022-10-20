import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as a,e}from"./app.5aebcaaa.js";var p="/assets/img_7.547538f4.png",t="/assets/img_8.1612c616.png",o="/assets/img_9.37b71775.png",l="/assets/img_10.9084b769.png",c="/assets/img_11.40248235.png",i="/assets/img_12.4d17af51.png",r="/assets/img_13.b529a002.png",d="/assets/img_14.59a0e408.png",u="/assets/img_15.fbeff8e3.png",k="/assets/img_16.cd1799b3.png",m="/assets/img_17.5a2e4122.png",v="/assets/img_18.ea5cfd04.png",b="/assets/img_19.111f30ae.png";const y={},w=e(`<h1 id="sql-\u8BED\u53E5-\u7EC3\u4E60" tabindex="-1"><a class="header-anchor" href="#sql-\u8BED\u53E5-\u7EC3\u4E60" aria-hidden="true">#</a> \u{1F4EF} SQL \u8BED\u53E5 &amp; \u7EC3\u4E60</h1><h2 id="_1-\u5E38\u89C1-sql-\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_1-\u5E38\u89C1-sql-\u67E5\u8BE2" aria-hidden="true">#</a> 1. \u5E38\u89C1 sql \u67E5\u8BE2</h2><h3 id="_1-\u67E5\u8BE2\u8868\u4E2D\u91CD\u590D\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#_1-\u67E5\u8BE2\u8868\u4E2D\u91CD\u590D\u8BB0\u5F55" aria-hidden="true">#</a> 1) \u67E5\u8BE2\u8868\u4E2D\u91CD\u590D\u8BB0\u5F55</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
    <span class="token operator">*</span>
<span class="token keyword">FROM</span>
    <span class="token keyword">table</span><span class="token operator">-</span>name
<span class="token keyword">WHERE</span>
    col<span class="token operator">-</span>name <span class="token operator">IN</span> <span class="token punctuation">(</span>
        <span class="token keyword">SELECT</span>
            col<span class="token operator">-</span>name
        <span class="token keyword">FROM</span>
            <span class="token keyword">table</span><span class="token operator">-</span>name
        <span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
            col<span class="token operator">-</span>name
        <span class="token keyword">HAVING</span>
            <span class="token function">count</span><span class="token punctuation">(</span>col<span class="token operator">-</span>name<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span>
    <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u5220\u9664\u8868\u4E2D\u591A\u4F59\u7684\u91CD\u590D\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#_2-\u5220\u9664\u8868\u4E2D\u591A\u4F59\u7684\u91CD\u590D\u8BB0\u5F55" aria-hidden="true">#</a> 2) \u5220\u9664\u8868\u4E2D\u591A\u4F59\u7684\u91CD\u590D\u8BB0\u5F55</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">DELETE</span>
<span class="token keyword">FROM</span>
    <span class="token keyword">table</span><span class="token operator">-</span>name
<span class="token keyword">WHERE</span>
    col<span class="token operator">-</span>name <span class="token operator">IN</span> <span class="token punctuation">(</span>
         <span class="token keyword">SELECT</span>
            col<span class="token operator">-</span>name
         <span class="token keyword">FROM</span><span class="token punctuation">(</span> <span class="token comment">// \u66F4\u65B0\u6570\u636E\u65F6\u4F7F\u7528\u4E86\u67E5\u8BE2\uFF0C\u800C\u67E5\u8BE2\u7684\u6570\u636E\u53C8\u505A\u4E86\u66F4\u65B0\u7684\u6761\u4EF6\uFF0Cmysql\u4E0D\u652F\u6301\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u56E0\u6B64\u518D\u52A0\u4E86\u4E00\u5C42 select \u5C01\u88C5</span>
             <span class="token keyword">SELECT</span>
                col<span class="token operator">-</span>name
            <span class="token keyword">FROM</span>
                <span class="token keyword">table</span><span class="token operator">-</span>name
            <span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
                col<span class="token operator">-</span>name
            <span class="token keyword">HAVING</span>
                <span class="token function">count</span><span class="token punctuation">(</span>col<span class="token operator">-</span>name<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span>
        <span class="token punctuation">)</span> a
    <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u627E\u51FA\u6240\u6709\u5728-tablea-\u4E2D\u5B58\u5728-\u4F46-tableb-\u4E2D\u4E0D\u5B58\u5728-\u4E14-tablec-\u4E2D\u4E0D\u5B58\u5728\u7684\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#_3-\u627E\u51FA\u6240\u6709\u5728-tablea-\u4E2D\u5B58\u5728-\u4F46-tableb-\u4E2D\u4E0D\u5B58\u5728-\u4E14-tablec-\u4E2D\u4E0D\u5B58\u5728\u7684\u8BB0\u5F55" aria-hidden="true">#</a> 3) \u627E\u51FA\u6240\u6709\u5728 tableA \u4E2D\u5B58\u5728\uFF0C\u4F46 tableB \u4E2D\u4E0D\u5B58\u5728\uFF0C\u4E14 tableC \u4E2D\u4E0D\u5B58\u5728\u7684\u8BB0\u5F55</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># expect \u81EA\u52A8\u6D88\u53BB\u91CD\u590D\u884C</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tableA execept <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tableB<span class="token punctuation">)</span> <span class="token keyword">except</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tableC<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_2-sql-\u7EC3\u4E60" tabindex="-1"><a class="header-anchor" href="#_2-sql-\u7EC3\u4E60" aria-hidden="true">#</a> 2. SQL \u7EC3\u4E60</h2><h3 id="_1-175-\u7EC4\u5408\u4E24\u4E2A\u8868" tabindex="-1"><a class="header-anchor" href="#_1-175-\u7EC4\u5408\u4E24\u4E2A\u8868" aria-hidden="true">#</a> 1) \u{1F38C} 175. \u7EC4\u5408\u4E24\u4E2A\u8868</h3><p><img src="`+p+`" alt="img_7.png"></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># Write your MySQL query statement below</span>
<span class="token keyword">select</span> FirstName<span class="token punctuation">,</span> LastName<span class="token punctuation">,</span> City<span class="token punctuation">,</span> State 
    <span class="token keyword">from</span> Person <span class="token keyword">left</span> <span class="token keyword">join</span> Address 
    <span class="token keyword">on</span> Person<span class="token punctuation">.</span>personId <span class="token operator">=</span> Address<span class="token punctuation">.</span>personId
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-176-\u7B2C\u4E8C\u9AD8\u7684\u85AA\u6C34" tabindex="-1"><a class="header-anchor" href="#_2-176-\u7B2C\u4E8C\u9AD8\u7684\u85AA\u6C34" aria-hidden="true">#</a> 2) \u{1F38C} \u{1F38C} 176. \u7B2C\u4E8C\u9AD8\u7684\u85AA\u6C34</h3><p><img src="`+t+`" alt="img_8.png"></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># Write your MySQL query statement below</span>
<span class="token comment"># \u82E5\u53EA\u6709\u4E00\u884C\u8BB0\u5F55\uFF0C\u6CA1\u6709\u5916\u5C42 select \u5305\u542B\uFF0C\u5219\u4F1A\u62A5\u9519</span>
<span class="token keyword">select</span> <span class="token punctuation">(</span>
    <span class="token keyword">select</span> <span class="token keyword">distinct</span> salary
    <span class="token keyword">from</span> Employee
    <span class="token keyword">order</span> <span class="token keyword">by</span> salary <span class="token keyword">desc</span>
    <span class="token keyword">limit</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span>
 <span class="token punctuation">)</span> <span class="token keyword">as</span> SecondHighestSalary 
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-177-\u7B2Cn\u9AD8\u7684\u85AA\u6C34" tabindex="-1"><a class="header-anchor" href="#_3-177-\u7B2Cn\u9AD8\u7684\u85AA\u6C34" aria-hidden="true">#</a> 3) \u{1F38C} \u{1F38C} 177. \u7B2CN\u9AD8\u7684\u85AA\u6C34</h3><p><img src="`+o+`" alt="img_9.png"></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> getNthHighestSalary<span class="token punctuation">(</span>N <span class="token keyword">INT</span><span class="token punctuation">)</span> <span class="token keyword">RETURNS</span> <span class="token keyword">INT</span>
<span class="token keyword">BEGIN</span>
  <span class="token keyword">set</span> n <span class="token operator">=</span> N <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">RETURN</span> <span class="token punctuation">(</span>
      <span class="token comment"># Write your MySQL query statement below.</span>
      <span class="token keyword">select</span><span class="token punctuation">(</span>
          <span class="token keyword">select</span> <span class="token keyword">distinct</span> salary <span class="token keyword">from</span> Employee
            <span class="token keyword">order</span> <span class="token keyword">by</span> salary <span class="token keyword">desc</span>
            <span class="token keyword">limit</span> n<span class="token punctuation">,</span> <span class="token number">1</span>
      <span class="token punctuation">)</span> 
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-178-\u5206\u6570\u6392\u540D" tabindex="-1"><a class="header-anchor" href="#_4-178-\u5206\u6570\u6392\u540D" aria-hidden="true">#</a> 4) \u{1F38C} \u{1F38C} \u{1F38C} 178. \u5206\u6570\u6392\u540D</h3><p><img src="`+l+`" alt="img_10.png"></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># Write your MySQL query statement below</span>
<span class="token comment"># score \u5217\u5F88\u7B80\u5355\u5C31\u53EF\u4EE5\u5199\u51FA</span>
<span class="token comment"># rank \u5217\u8981\u6C42\u5F53\u524D score \u7684\u6392\u540D\uFF0C</span>
<span class="token comment"># \u53EA\u9700\u8981\u8BB0\u5F55\u6709\u591A\u5C11\u4E2A\u5206\u6570\u6BD4\u5B83\u9AD8\u6216\u8005\u7B49\u4E8E\u5B83\uFF0C\u7136\u540E\u5BF9\u8BB0\u5F55\u8FDB\u884C\u53BB\u91CD\uFF0C\u7136\u540E\u7EDF\u8BA1\u6761\u6570\u5373\u662F\u4ECE 1 \u5F00\u59CB\u8BA1\u7B97\u7684\u6392\u540D</span>
<span class="token comment"># rank \u4E3A\u5173\u952E\u5B57\uFF0C\u9700\u52A0\u5F15\u53F7</span>
<span class="token keyword">select</span> a<span class="token punctuation">.</span>score <span class="token keyword">as</span> score<span class="token punctuation">,</span> 
    <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">distinct</span> b<span class="token punctuation">.</span>score<span class="token punctuation">)</span> <span class="token keyword">from</span> Scores b <span class="token keyword">where</span> b<span class="token punctuation">.</span>score <span class="token operator">&gt;=</span> a<span class="token punctuation">.</span>score<span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token identifier"><span class="token punctuation">\`</span>rank<span class="token punctuation">\`</span></span>
    <span class="token keyword">from</span> Scores a
    <span class="token keyword">order</span> <span class="token keyword">by</span> a<span class="token punctuation">.</span>score <span class="token keyword">desc</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-180-\u8FDE\u7EED\u51FA\u73B0\u7684\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#_5-180-\u8FDE\u7EED\u51FA\u73B0\u7684\u6570\u5B57" aria-hidden="true">#</a> 5) \u{1F38C} \u{1F38C} \u{1F38C} 180. \u8FDE\u7EED\u51FA\u73B0\u7684\u6570\u5B57</h3><p><img src="`+c+`" alt="img_11.png"></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># Write your MySQL query statement below</span>
<span class="token comment"># \u4E09\u8868\u5185\u8054</span>
<span class="token keyword">select</span> <span class="token keyword">distinct</span> a<span class="token punctuation">.</span>Num <span class="token keyword">as</span> ConsecutiveNums 
    <span class="token keyword">from</span> Logs a
    <span class="token keyword">inner</span> <span class="token keyword">join</span> Logs b
    <span class="token keyword">inner</span> <span class="token keyword">join</span> Logs c 
    <span class="token keyword">on</span> a<span class="token punctuation">.</span>id <span class="token operator">=</span> b<span class="token punctuation">.</span>id <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token operator">and</span> b<span class="token punctuation">.</span>id <span class="token operator">=</span> c<span class="token punctuation">.</span>id <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token operator">and</span> a<span class="token punctuation">.</span>Num <span class="token operator">=</span> b<span class="token punctuation">.</span>Num
    <span class="token operator">and</span> b<span class="token punctuation">.</span>Num <span class="token operator">=</span> c<span class="token punctuation">.</span>Num
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-181-\u8D85\u8FC7\u7ECF\u7406\u6536\u5165\u7684\u5458\u5DE5" tabindex="-1"><a class="header-anchor" href="#_6-181-\u8D85\u8FC7\u7ECF\u7406\u6536\u5165\u7684\u5458\u5DE5" aria-hidden="true">#</a> 6) \u{1F38C} 181. \u8D85\u8FC7\u7ECF\u7406\u6536\u5165\u7684\u5458\u5DE5</h3><p><img src="`+i+`" alt="img_12.png"></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># Write your MySQL query statement below</span>
<span class="token keyword">select</span> a<span class="token punctuation">.</span>name <span class="token keyword">as</span> Employee <span class="token keyword">from</span> Employee a
    <span class="token keyword">where</span> a<span class="token punctuation">.</span>managerId <span class="token operator">is</span> <span class="token operator">not</span> <span class="token boolean">null</span> 
    <span class="token operator">and</span> a<span class="token punctuation">.</span>salary <span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token keyword">select</span> b<span class="token punctuation">.</span>salary <span class="token keyword">from</span> Employee b <span class="token keyword">where</span> b<span class="token punctuation">.</span>id <span class="token operator">=</span> a<span class="token punctuation">.</span>managerId<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-182-\u67E5\u627E\u91CD\u590D\u7684\u7535\u5B50\u90AE\u7BB1" tabindex="-1"><a class="header-anchor" href="#_7-182-\u67E5\u627E\u91CD\u590D\u7684\u7535\u5B50\u90AE\u7BB1" aria-hidden="true">#</a> 7) \u{1F38C} 182. \u67E5\u627E\u91CD\u590D\u7684\u7535\u5B50\u90AE\u7BB1</h3><p><img src="`+r+`" alt="img_13.png"></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># Write your MySQL query statement below</span>
<span class="token comment"># \u901A\u8FC7 group by + having \u5224\u65AD\u662F\u5426\u91CD\u590D</span>
<span class="token keyword">select</span> Email <span class="token keyword">from</span> Person
    <span class="token keyword">group</span> <span class="token keyword">by</span> Email
    <span class="token keyword">having</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-183-\u4ECE\u4E0D\u8BA2\u8D2D\u7684\u5BA2\u6237" tabindex="-1"><a class="header-anchor" href="#_8-183-\u4ECE\u4E0D\u8BA2\u8D2D\u7684\u5BA2\u6237" aria-hidden="true">#</a> 8) \u{1F38C} 183. \u4ECE\u4E0D\u8BA2\u8D2D\u7684\u5BA2\u6237</h3><p><img src="`+d+`" alt="img_14.png"></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># Write your MySQL query statement below</span>
<span class="token keyword">select</span> c<span class="token punctuation">.</span>Name <span class="token keyword">as</span> Customers <span class="token keyword">from</span> Customers c
    <span class="token keyword">where</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span>Id<span class="token punctuation">)</span> <span class="token keyword">from</span> Orders o <span class="token keyword">where</span> o<span class="token punctuation">.</span>CustomerId <span class="token operator">=</span> c<span class="token punctuation">.</span>Id<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-184-\u90E8\u95E8\u5DE5\u8D44\u6700\u9AD8\u7684\u5458\u5DE5" tabindex="-1"><a class="header-anchor" href="#_9-184-\u90E8\u95E8\u5DE5\u8D44\u6700\u9AD8\u7684\u5458\u5DE5" aria-hidden="true">#</a> 9) \u{1F38C} \u{1F38C} 184. \u90E8\u95E8\u5DE5\u8D44\u6700\u9AD8\u7684\u5458\u5DE5</h3><p><img src="`+u+`" alt="img_15.png"></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># Write your MySQL query statement below</span>
<span class="token comment"># \u5DE6\u5916\u8FDE\u63A5\uFF0C\u6BCF\u7EC4\u9009\u53D6\u5DE5\u8D44\u6700\u9AD8\u7684\u4E00\u884C</span>
<span class="token keyword">select</span> d<span class="token punctuation">.</span>name <span class="token keyword">as</span> Department<span class="token punctuation">,</span> e<span class="token punctuation">.</span>name <span class="token keyword">as</span> Employee<span class="token punctuation">,</span> e<span class="token punctuation">.</span>salary <span class="token keyword">as</span> Salary 
    <span class="token keyword">from</span> Employee e <span class="token keyword">left</span> <span class="token keyword">join</span> Department d 
    <span class="token keyword">on</span> e<span class="token punctuation">.</span>departmentId <span class="token operator">=</span> d<span class="token punctuation">.</span>id 
    <span class="token keyword">where</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>departmentId<span class="token punctuation">,</span> e<span class="token punctuation">.</span>salary<span class="token punctuation">)</span> <span class="token operator">in</span> <span class="token punctuation">(</span>
        <span class="token keyword">select</span> departmentId<span class="token punctuation">,</span> <span class="token function">max</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
            <span class="token keyword">from</span> Employee
            <span class="token keyword">group</span> <span class="token keyword">by</span> departmentId
    <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-185-\u90E8\u95E8\u5DE5\u8D44\u524D\u4E09\u9AD8\u7684\u6240\u6709\u5458\u5DE5" tabindex="-1"><a class="header-anchor" href="#_10-185-\u90E8\u95E8\u5DE5\u8D44\u524D\u4E09\u9AD8\u7684\u6240\u6709\u5458\u5DE5" aria-hidden="true">#</a> 10) \u{1F38C} \u{1F38C} \u{1F38C} 185. \u90E8\u95E8\u5DE5\u8D44\u524D\u4E09\u9AD8\u7684\u6240\u6709\u5458\u5DE5</h3><p><img src="`+k+`" alt="img_16.png"></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># Write your MySQL query statement below</span>
<span class="token comment"># \u5DE6\u5916\u8FDE\u63A5</span>
<span class="token comment"># \u6BCF\u7EC4\u8BE5\u5458\u5DE5\uFF0C\u6BD4\u8BE5\u5458\u5DE5\u5DE5\u8D44\u9AD8\u7684\u4EBA\u4E0D\u8D85\u8FC7 3 \u4E2A</span>
<span class="token keyword">select</span> d<span class="token punctuation">.</span>name <span class="token keyword">as</span> Department<span class="token punctuation">,</span> e<span class="token punctuation">.</span>name <span class="token keyword">as</span> Employee<span class="token punctuation">,</span> e<span class="token punctuation">.</span>salary <span class="token keyword">as</span> Salary 
    <span class="token keyword">from</span> Employee e <span class="token keyword">left</span> <span class="token keyword">join</span> Department d 
    <span class="token keyword">on</span> e<span class="token punctuation">.</span>departmentId <span class="token operator">=</span> d<span class="token punctuation">.</span>id 
    <span class="token keyword">where</span> <span class="token punctuation">(</span>
        <span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">distinct</span> e1<span class="token punctuation">.</span>salary<span class="token punctuation">)</span> 
            <span class="token keyword">from</span> Employee e1
            <span class="token keyword">where</span> e<span class="token punctuation">.</span>departmentId <span class="token operator">=</span> e1<span class="token punctuation">.</span>departmentId 
            <span class="token operator">and</span> e1<span class="token punctuation">.</span>salary <span class="token operator">&gt;</span> e<span class="token punctuation">.</span>salary
    <span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-196-\u5220\u9664\u91CD\u590D\u7684\u7535\u5B50\u90AE\u7BB1" tabindex="-1"><a class="header-anchor" href="#_11-196-\u5220\u9664\u91CD\u590D\u7684\u7535\u5B50\u90AE\u7BB1" aria-hidden="true">#</a> 11) \u{1F38C} \u{1F38C} 196. \u5220\u9664\u91CD\u590D\u7684\u7535\u5B50\u90AE\u7BB1</h3><p><img src="`+m+`" alt="img_17.png"></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># Please write a DELETE statement and DO NOT write a SELECT statement.</span>
<span class="token comment"># Write your MySQL query statement below</span>
<span class="token keyword">delete</span> p1 
    <span class="token keyword">from</span> Person p1<span class="token punctuation">,</span> Person p2
    <span class="token keyword">where</span> p1<span class="token punctuation">.</span>email <span class="token operator">=</span> p2<span class="token punctuation">.</span>email
    <span class="token operator">and</span> p1<span class="token punctuation">.</span>id <span class="token operator">&gt;</span> p2<span class="token punctuation">.</span>id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-197-\u4E0A\u5347\u7684\u6E29\u5EA6" tabindex="-1"><a class="header-anchor" href="#_12-197-\u4E0A\u5347\u7684\u6E29\u5EA6" aria-hidden="true">#</a> 12) \u{1F38C} \u{1F38C} 197. \u4E0A\u5347\u7684\u6E29\u5EA6</h3><p><img src="`+v+`" alt="img_18.png"></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># Write your MySQL query statement below</span>
<span class="token comment"># \u501F\u52A9\u65E5\u671F\u51FD\u6570</span>
<span class="token keyword">select</span> w1<span class="token punctuation">.</span>id 
    <span class="token keyword">from</span> Weather w1 <span class="token keyword">left</span> <span class="token keyword">join</span> Weather w2
    <span class="token keyword">on</span> datediff<span class="token punctuation">(</span>w1<span class="token punctuation">.</span>recordDate<span class="token punctuation">,</span> w2<span class="token punctuation">.</span>recordDate<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">where</span> w1<span class="token punctuation">.</span>Temperature <span class="token operator">&gt;</span> w2<span class="token punctuation">.</span>Temperature<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-262-\u884C\u7A0B\u548C\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#_13-262-\u884C\u7A0B\u548C\u7528\u6237" aria-hidden="true">#</a> 13) \u{1F38C} \u{1F38C} \u{1F38C} 262. \u884C\u7A0B\u548C\u7528\u6237</h3><p><img src="`+b+`" alt="img_19.png"></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># Write your MySQL query statement below</span>
<span class="token keyword">select</span> t<span class="token punctuation">.</span>request_at <span class="token keyword">as</span> <span class="token keyword">Day</span><span class="token punctuation">,</span> <span class="token function">round</span><span class="token punctuation">(</span>
    <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">if</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token operator">=</span> <span class="token string">&#39;completed&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">/</span>
    <span class="token function">count</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token keyword">status</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span>
<span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token identifier"><span class="token punctuation">\`</span>Cancellation Rate<span class="token punctuation">\`</span></span>
<span class="token keyword">from</span> Trips t
    <span class="token keyword">where</span> t<span class="token punctuation">.</span>client_id <span class="token operator">not</span> <span class="token operator">in</span> <span class="token punctuation">(</span>
        <span class="token keyword">select</span> users_id
            <span class="token keyword">from</span> Users
        <span class="token keyword">where</span> users_id <span class="token operator">=</span> t<span class="token punctuation">.</span>client_id
        <span class="token operator">and</span> banned <span class="token operator">=</span> <span class="token string">&#39;Yes&#39;</span>
    <span class="token punctuation">)</span>
    <span class="token operator">and</span>
    t<span class="token punctuation">.</span>driver_id <span class="token operator">not</span> <span class="token operator">in</span> <span class="token punctuation">(</span>
        <span class="token keyword">select</span> users_id
            <span class="token keyword">from</span> Users
        <span class="token keyword">where</span> users_id <span class="token operator">=</span> t<span class="token punctuation">.</span>driver_id
        <span class="token operator">and</span> banned <span class="token operator">=</span> <span class="token string">&#39;Yes&#39;</span>
    <span class="token punctuation">)</span>
    <span class="token operator">and</span> request_at <span class="token operator">between</span> <span class="token string">&#39;2013-10-01&#39;</span> <span class="token operator">and</span> <span class="token string">&#39;2013-10-03&#39;</span>
    <span class="token keyword">group</span> <span class="token keyword">by</span> request_at
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,49),g=[w];function h(_,f){return n(),a("div",null,g)}var E=s(y,[["render",h],["__file","SQL\u8BED\u53E5.html.vue"]]);export{E as default};
