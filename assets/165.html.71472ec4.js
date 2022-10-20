import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as e,e as s}from"./app.5aebcaaa.js";var l="/assets/img_3.85346e33.png",r="/assets/img_2.f9516720.png";const a={},d=s('<h1 id="_165-\u6BD4\u8F83\u7248\u672C\u53F7" tabindex="-1"><a class="header-anchor" href="#_165-\u6BD4\u8F83\u7248\u672C\u53F7" aria-hidden="true">#</a> \u{1F315} 165. \u6BD4\u8F83\u7248\u672C\u53F7</h1><p>\u96BE\u5EA6: \u{1F315}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+l+`" alt="img_3.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-javaclass ext-javaclass line-numbers-mode"><pre class="language-javaclass"><code>    public int compareVersion(String version1, String version2) {
        // \u601D\u8DEF\uFF1A
        // \u4EE5 . \u5206\u5272\uFF0C\u83B7\u53D6\u4FEE\u8BA2\u53F7\uFF0C\u6BD4\u8F83\u5927\u5C0F
        int m = version1.length();
        int n = version2.length();
        int a = 0;
        int b = 0;
        int left = -1;
        int right = -1;
        while(a &lt; m &amp;&amp; b &lt; n) {
            // a \u4E3A\u5DE6\u8FB9\u754C\uFF0C\u627E\u5230\u7B2C\u4E00\u4E2A\u975E 0 \u503C
            while(a &lt; m &amp;&amp; version1.charAt(a) == &#39;0&#39;) {
                a ++;
            }
            if(a == m) {
                break;
            }
            int ar = -1;
            if(version1.charAt(a) == &#39;.&#39;) { // \u8BF4\u660E . \u4E4B\u524D\u5168\u90E8\u4E3A 0
                left = 0;
                ar = a;
            } else {
                // a \u4E3A\u5DE6\u8FB9\u754C\uFF0C\u627E\u5230\u5BF9\u5E94\u53F3\u8FB9\u754C
                ar = a + 1;
                while(ar &lt; m &amp;&amp; version1.charAt(ar) != &#39;.&#39;) {
                    ar ++;
                }
                // [a, ar - 1]
                left = Integer.parseInt(version1.substring(a, ar));
            }
            while(b &lt; n &amp;&amp; version2.charAt(b) == &#39;0&#39;) {
                b ++;
            }
            if(b == n) {
                break;
            }
            int br = -1;
            if(version2.charAt(b) == &#39;.&#39;) {
                right = 0;
                br = b;
            } else {
                br = b + 1;
                while(br &lt; n &amp;&amp; version2.charAt(br) != &#39;.&#39;) {
                    br ++;
                }
                right = Integer.parseInt(version2.substring(b, br));
            }
            // System.out.println(left + &quot;   &quot; + right + &quot;  &quot; + b + &quot;  &quot; + br);
            if(left &lt; right) {
                return -1;
            } else if(left &gt; right) {
                return 1;
            } else {
                a = ar + 1;
                b = br + 1;
            }
        }
        while(a &lt; m) {
            // \u8BF4\u660E version2 \u5DF2\u7ECF\u5168\u90E8\u904D\u5386\u5B8C\uFF0Cversion2 \u8BE5\u4F4D == 0
            while(a &lt; m &amp;&amp; (version1.charAt(a) &lt;= &#39;0&#39; || version1.charAt(a) &gt; &#39;9&#39;)) {
                a ++;
            }
            if(a == m) {
                return 0;
            } else {
                // \u9047\u5230\u4E86\u4E00\u4E2A 1 
                return 1;
            }
        }
        while(b &lt; n) {
            while(b &lt; n &amp;&amp; (version2.charAt(b) &lt;= &#39;0&#39; || version2.charAt(b) &gt; &#39;9&#39;)) {
                b ++;
            }
            if(b == n) {
                return 0;
            } else {
                return -1;
            }
        }
        return 0;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+r+'" alt="img_2.png"></p>',10),v=[d];function c(m,b){return n(),e("div",null,v)}var h=i(a,[["render",c],["__file","165.html.vue"]]);export{h as default};
