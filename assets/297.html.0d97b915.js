import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.5aebcaaa.js";var t="/assets/img_8.8b1aa916.png",e="/assets/img_7.b29ea1da.png",o="/assets/img_9.26a4b6c4.png";const c={},l=p('<h1 id="_297-\u4E8C\u53C9\u6811\u7684\u5E8F\u5217\u5316\u4E0E\u53CD\u5E8F\u5217\u5316" tabindex="-1"><a class="header-anchor" href="#_297-\u4E8C\u53C9\u6811\u7684\u5E8F\u5217\u5316\u4E0E\u53CD\u5E8F\u5217\u5316" aria-hidden="true">#</a> \u{1F315}\u{1F315}297. \u4E8C\u53C9\u6811\u7684\u5E8F\u5217\u5316\u4E0E\u53CD\u5E8F\u5217\u5316</h1><p>\u96BE\u5EA6: \u{1F315}\u{1F315}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+t+`" alt="img_8.png"></p><hr><h3 id="\u89E3\u6CD5-1-\u5C42\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-1-\u5C42\u5E8F" aria-hidden="true">#</a> \u89E3\u6CD5 1 - \u5C42\u5E8F</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * public class TreeNode <span class="token punctuation">{</span>
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) <span class="token punctuation">{</span> val = x; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Codec</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u601D\u8DEF\uFF1A</span>
    <span class="token comment">// \u5C42\u5E8F\u904D\u5386 - \u5E8F\u5217\u5316</span>
    <span class="token comment">// \u7A7A\u8282\u70B9\u4E5F\u5165\u961F</span>

    <span class="token comment">// Encodes a tree to a single string.</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">TreeNode</span> cur <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>cur <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token char">&#39;#&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        sb<span class="token punctuation">.</span><span class="token function">deleteCharAt</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Decodes your encoded data to tree.</span>
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">deserialize</span><span class="token punctuation">(</span><span class="token class-name">String</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u4ECD\u7136\u501F\u52A9 \u8F85\u52A9\u961F\u5217</span>
        <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u9664\u53BB\u6839\u8282\u70B9\u7684 \u4E0B\u6807 0\uFF0C\u4ECE 1 \u5F00\u59CB</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">TreeNode</span> cur <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> left <span class="token operator">=</span> array<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
            index <span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> right <span class="token operator">=</span> array<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
            index <span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>left<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;#&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                cur<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>right<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;#&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                cur<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Your Codec object will be instantiated and called as such:</span>
<span class="token comment">// Codec ser = new Codec();</span>
<span class="token comment">// Codec deser = new Codec();</span>
<span class="token comment">// TreeNode ans = deser.deserialize(ser.serialize(root));</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-1" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-1" aria-hidden="true">#</a> \u8F93\u51FA 1</h3><p><img src="`+e+`" alt="img_7.png"></p><hr><h3 id="\u89E3\u6CD5-2-\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-2-\u9012\u5F52" aria-hidden="true">#</a> \u89E3\u6CD5 2 - \u9012\u5F52</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * public class TreeNode <span class="token punctuation">{</span>
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) <span class="token punctuation">{</span> val = x; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Codec</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u601D\u8DEF\uFF1A</span>
    <span class="token comment">// \u5148\u5E8F\u904D\u5386 - \u7A7A\u8282\u70B9\u4E5F\u5165\u7ED3\u679C\u96C6</span>
    <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">// Encodes a tree to a single string.</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">mySol1</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> sb<span class="token punctuation">)</span><span class="token punctuation">;</span>
        sb<span class="token punctuation">.</span><span class="token function">deleteCharAt</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">mySol1</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token class-name">StringBuilder</span> sb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u9012\u5F52\u7EC8\u6B62\u6761\u4EF6</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;#&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">mySol1</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> sb<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">mySol1</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> sb<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Decodes your encoded data to tree.</span>
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">deserialize</span><span class="token punctuation">(</span><span class="token class-name">String</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">mySol2</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">TreeNode</span> <span class="token function">mySol2</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> cur <span class="token operator">=</span> array<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;#&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            index <span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> val <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        index <span class="token operator">++</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">mySol2</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">mySol2</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Your Codec object will be instantiated and called as such:</span>
<span class="token comment">// Codec ser = new Codec();</span>
<span class="token comment">// Codec deser = new Codec();</span>
<span class="token comment">// TreeNode ans = deser.deserialize(ser.serialize(root));</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-2" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-2" aria-hidden="true">#</a> \u8F93\u51FA 2</h3><p><img src="`+o+'" alt="img_9.png"></p>',16),i=[l];function u(k,r){return s(),a("div",null,i)}var m=n(c,[["render",u],["__file","297.html.vue"]]);export{m as default};