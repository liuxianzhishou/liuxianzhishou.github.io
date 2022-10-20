import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as i,e as s}from"./app.5aebcaaa.js";var a="/assets/img_9.f81b8ecd.png",d="/assets/img_8.13fa9ae1.png";const r={},l=s('<h1 id="_169-\u591A\u6570\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_169-\u591A\u6570\u5143\u7D20" aria-hidden="true">#</a> \u{1F317} 169. \u591A\u6570\u5143\u7D20</h1><p>\u96BE\u5EA6: \u{1F317}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+a+`" alt="img_9.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-javaclass ext-javaclass line-numbers-mode"><pre class="language-javaclass"><code>    public int majorityElement(int[] nums) {
        // \u601D\u8DEF\uFF1A
        // \u6469\u5C14\u6295\u7968\u6CD5\uFF0C\u5982\u679C\u662F\u4F17\u6570\uFF0C\u90A3\u4E48\u5373\u4F7F\u88AB\u5176\u4ED6\u503C\u62B5\u6D88\uFF0C\u4E5F\u6700\u7EC8\u53EF\u4EE5\u5B58\u6D3B
        int len = nums.length;
        int res = nums[0];
        int count = 1; // \u5F53\u524D\u503C\u6709\u4E00\u7968
        if(len == 1) {
            return res;
        }
        for(int i = 1; i &lt; len; i ++) {
            if(nums[i] == res) {
                count ++;
            } else {
                if(count == 0) {
                    res = nums[i];
                    count = 1;
                } else {
                    count --;
                }
            }
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+d+'" alt="img_8.png"></p>',10),c=[l];function v(t,u){return e(),i("div",null,c)}var o=n(r,[["render",v],["__file","169.html.vue"]]);export{o as default};
