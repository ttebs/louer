(function (window, k) {
    if (!window.AppstleMembershipIncluded && (!urlIsProductPage() || 'V1' === 'V2')) {
      window.AppstleMembershipIncluded = true;
      appstleLoadScript = function (src, callback) {
        var script = document.createElement("script");
        script.charset = "utf-8";
        script.async = true;
        script.src = src;
        script.onload = script.onreadystatechange = function () {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = k;
            callback && callback();
          }
        };
        document.getElementsByTagName("head")[0].appendChild(script)
      };
      appstleLoadScript("https://cdn.shopify.com/s/files/1/0692/9766/8399/t/1/assets/appstle-membership.js?v=1684147427");

      window.AM = Window.AM || {};
      AM.Config = {
        "selectors": {
            "payment_button_selectors": "form[action$='/cart/add'] .shopify-payment-button",
            "subscriptionLinkSelector": "#MainContent > div > div:nth-child(2)",
            "atcButtonPlacement": "AFTER",
            "subscriptionLinkPlacement": "BEFORE"
        },
        "useUrlWithCustomerId": false,
        "atcButtonSelector": "registration",
        "moneyFormat": "{% raw %}${{amount}}{% endraw %}",
        "oneTimePurchaseText": "One Time Purchase",
        "shop": "louerlesac.myshopify.com",
        "deliveryText": "delivery",
        "purchaseOptionsText": "Membership Options",
        "manageSubscriptionButtonText": "Manage Membership",
        "subscriptionOptionText": "Join Now",
        "sellingPlanSelectTitle": "DELIVERY FREQUENCY",
        "subscriptionPriceDisplayText": "",
        "tooltipTitle": "Membership detail",
        "api_key": "7lo03utVOBF4",
        "showTooltipOnClick": "false",
        "tooltipDesctiption": "<strong>Have complete control of your memberships<\/strong><br\/><br\/>Skip, reschedule, edit, cancel deliveries anytime matching your needs.",
        "tooltipDescriptionOnPrepaidPlan": "<b>Prepaid Plan Details<\/b><\/br> Total price: {{{totalPrice}}} ( Price for every delivery: {{{pricePerDelivery}}})",
        "tooltipDescriptionOnMultipleDiscount": "<b>Discount Details<\/b><\/br> Initial discount is {{discountOne}} and then {{discountTwo}}",
        "tooltipDescriptionCustomization": "{{{defaultTooltipDescription}}} <\/br>  {{{prepaidDetails}}} <\/br> {{{discountDetails}}}",
        "orderStatusManageSubscriptionTitle": "Membership",
        "orderStatusManageSubscriptionDescription": "Continue to your account to view and manage your memberships. Please use the same email address that you used to buy the membership.",
        "orderStatusManageSubscriptionButtonText": "Manage your membership",
        "subscriptionOptionSelectedByDefault" : false,
        "totalPricePerDeliveryText" : "{{{prepaidPerDeliveryPrice}}}\/delivery",
        "memberOnlySellingPlansJson": {},
        "fieldsBySellingPlanId": "{\"gid:\/\/shopify\/SellingPlan\/7861371183\":\"[{\\\"label\\\":\\\"\\\",\\\"type\\\":\\\"text\\\",\\\"required\\\":false,\\\"visible\\\":false}]\",\"gid:\/\/shopify\/SellingPlan\/7834927407\":\"[{\\\"label\\\":\\\"\\\",\\\"type\\\":\\\"text\\\",\\\"required\\\":false,\\\"visible\\\":false}]\",\"gid:\/\/shopify\/SellingPlan\/7835844911\":\"[{\\\"label\\\":\\\"\\\",\\\"type\\\":\\\"text\\\",\\\"required\\\":false,\\\"visible\\\":false}]\"}",
        "rulesByCustomerTag": "{\"silver-membership\":[\"[{\\\"rule\\\":\\\"alternateTemplate\\\",\\\"selector\\\":\\\".product-form\\\",\\\"message\\\":\\\"You need to be a Silver Member to rent this product.\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"\\\",\\\"discountMessage\\\":\\\"\\\",\\\"discountUrl\\\":\\\"\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"templates\/product\\\",\\\"elementRestrictType\\\":\\\"category\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"Silver Member\\\",\\\"discountCodeText\\\":\\\"\\\",\\\"discountPercentage\\\":\\\"\\\",\\\"discountAmount\\\":\\\"\\\",\\\"discountCodeDetails\\\":\\\"\\\",\\\"templateFileName\\\":\\\"product.silver-membership.json\\\"}]\"],\"platinum-membership\":[\"[{\\\"rule\\\":\\\"alternateTemplate\\\",\\\"selector\\\":\\\".product-form\\\",\\\"message\\\":\\\"You need to be a Silver Member to rent this product.\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"\\\",\\\"discountMessage\\\":\\\"\\\",\\\"discountUrl\\\":\\\"\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"templates\/product\\\",\\\"elementRestrictType\\\":\\\"category\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"Silver Member\\\",\\\"discountCodeText\\\":\\\"\\\",\\\"discountPercentage\\\":\\\"\\\",\\\"discountAmount\\\":\\\"\\\",\\\"discountCodeDetails\\\":\\\"\\\",\\\"templateFileName\\\":\\\"product.platinum-membership.json\\\"}]\"],\"gold-membership\":[\"[{\\\"rule\\\":\\\"alternateTemplate\\\",\\\"selector\\\":\\\".product-form\\\",\\\"message\\\":\\\"You need to be a Silver Member to rent this product.\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"\\\",\\\"discountMessage\\\":\\\"\\\",\\\"discountUrl\\\":\\\"\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"templates\/product\\\",\\\"elementRestrictType\\\":\\\"category\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"Silver Member\\\",\\\"discountCodeText\\\":\\\"\\\",\\\"discountPercentage\\\":\\\"\\\",\\\"discountAmount\\\":\\\"\\\",\\\"discountCodeDetails\\\":\\\"\\\",\\\"templateFileName\\\":\\\"product.gold-membership.json\\\"}]\"]}",
        "membershipByCustomerTag": "{\"silver-membership\":[{\"id\":5942,\"shop\":\"louerlesac.myshopify.com\",\"groupName\":\"Silver Membership\",\"subscriptionId\":1481769263,\"productCount\":1,\"productVariantCount\":0,\"infoJson\":\"{\\\"id\\\":1481769263,\\\"productCount\\\":1,\\\"productVariantCount\\\":null,\\\"subscriptionPlans\\\":[{\\\"frequencyCount\\\":30,\\\"frequencyInterval\\\":\\\"DAY\\\",\\\"billingFrequencyCount\\\":30,\\\"billingFrequencyInterval\\\":\\\"DAY\\\",\\\"frequencyName\\\":\\\"Silver Membership\\\",\\\"discountOffer\\\":null,\\\"discountOffer2\\\":null,\\\"afterCycle1\\\":0,\\\"afterCycle2\\\":0,\\\"discountType\\\":null,\\\"discountType2\\\":null,\\\"discountEnabled\\\":false,\\\"discountEnabled2\\\":false,\\\"discountEnabledMasked\\\":false,\\\"discountEnabled2Masked\\\":false,\\\"id\\\":\\\"gid:\/\/shopify\/SellingPlan\/7834927407\\\",\\\"frequencyType\\\":\\\"ON_PURCHASE_DAY\\\",\\\"specificDayValue\\\":null,\\\"specificDayEnabled\\\":false,\\\"maxCycles\\\":null,\\\"minCycles\\\":3,\\\"cutOff\\\":0,\\\"prepaidFlag\\\":\\\"false\\\",\\\"idNew\\\":\\\"gid:\/\/shopify\/SellingPlan\/7834927407\\\",\\\"planType\\\":\\\"PAY_AS_YOU_GO\\\",\\\"deliveryPolicyPreAnchorBehavior\\\":\\\"ASAP\\\",\\\"freeTrialEnabled\\\":false,\\\"freeTrialCount\\\":null,\\\"freeTrialInterval\\\":null,\\\"frequencyDescription\\\":null}],\\\"groupName\\\":\\\"Silver Membership\\\",\\\"productIds\\\":\\\"[{\\\\\\\"id\\\\\\\":8190145462575,\\\\\\\"title\\\\\\\":\\\\\\\"Silver Membership\\\\\\\"}]\\\",\\\"productId\\\":null,\\\"variantIds\\\":\\\"[{\\\\\\\"id\\\\\\\":44719126642991,\\\\\\\"title\\\\\\\":\\\\\\\"Bottega Veneta Candy Acro Tote - Default Title\\\\\\\"}]\\\",\\\"accessoryProductIds\\\":null,\\\"customerTag\\\":\\\"silver-membership\\\",\\\"orderTag\\\":\\\"Silver Member\\\",\\\"rulesJson\\\":\\\"[{\\\\\\\"rule\\\\\\\":\\\\\\\"alternateTemplate\\\\\\\",\\\\\\\"selector\\\\\\\":\\\\\\\".product-form\\\\\\\",\\\\\\\"message\\\\\\\":\\\\\\\"You need to be a Silver Member to rent this product.\\\\\\\",\\\\\\\"path\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"pathMatch\\\\\\\":\\\\\\\"contains\\\\\\\",\\\\\\\"discountCode\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountMessage\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountUrl\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"deliveryFrequency\\\\\\\":\\\\\\\"Monthly\\\\\\\",\\\\\\\"limitAccessType\\\\\\\":\\\\\\\"templates\/product\\\\\\\",\\\\\\\"elementRestrictType\\\\\\\":\\\\\\\"category\\\\\\\",\\\\\\\"bucketCategory\\\\\\\":\\\\\\\"tags\\\\\\\",\\\\\\\"bucketCategoryValue\\\\\\\":\\\\\\\"Silver Member\\\\\\\",\\\\\\\"discountCodeText\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountPercentage\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountAmount\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountCodeDetails\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"templateFileName\\\\\\\":\\\\\\\"product.silver-membership.json\\\\\\\"}]\\\",\\\"formFieldsJson\\\":\\\"[{\\\\\\\"label\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"type\\\\\\\":\\\\\\\"text\\\\\\\",\\\\\\\"required\\\\\\\":false,\\\\\\\"visible\\\\\\\":false}]\\\"}\",\"productIds\":\"8190145462575\",\"variantIds\":\"44719126642991\",\"variantProductIds\":\"8188409446703\",\"customerTag\":\"silver-membership\",\"orderTag\":\"Silver Member\",\"rulesJson\":\"[{\\\"rule\\\":\\\"alternateTemplate\\\",\\\"selector\\\":\\\".product-form\\\",\\\"message\\\":\\\"You need to be a Silver Member to rent this product.\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"\\\",\\\"discountMessage\\\":\\\"\\\",\\\"discountUrl\\\":\\\"\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"templates\/product\\\",\\\"elementRestrictType\\\":\\\"category\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"Silver Member\\\",\\\"discountCodeText\\\":\\\"\\\",\\\"discountPercentage\\\":\\\"\\\",\\\"discountAmount\\\":\\\"\\\",\\\"discountCodeDetails\\\":\\\"\\\",\\\"templateFileName\\\":\\\"product.silver-membership.json\\\"}]\",\"formFieldsJson\":\"[{\\\"label\\\":\\\"\\\",\\\"type\\\":\\\"text\\\",\\\"required\\\":false,\\\"visible\\\":false}]\",\"savedSearchId\":null,\"savedSegmentSearchId\":\"gid:\/\/shopify\/Segment\/1016305582383\"}],\"platinum-membership\":[{\"id\":6355,\"shop\":\"louerlesac.myshopify.com\",\"groupName\":\"Platinum Membership\",\"subscriptionId\":1492517167,\"productCount\":0,\"productVariantCount\":0,\"infoJson\":\"{\\\"id\\\":1492517167,\\\"productCount\\\":0,\\\"productVariantCount\\\":null,\\\"subscriptionPlans\\\":[{\\\"frequencyCount\\\":30,\\\"frequencyInterval\\\":\\\"DAY\\\",\\\"billingFrequencyCount\\\":30,\\\"billingFrequencyInterval\\\":\\\"DAY\\\",\\\"frequencyName\\\":\\\"Gold Membership\\\",\\\"discountOffer\\\":null,\\\"discountOffer2\\\":null,\\\"afterCycle1\\\":0,\\\"afterCycle2\\\":0,\\\"discountType\\\":null,\\\"discountType2\\\":null,\\\"discountEnabled\\\":false,\\\"discountEnabled2\\\":false,\\\"discountEnabledMasked\\\":false,\\\"discountEnabled2Masked\\\":false,\\\"id\\\":\\\"gid:\/\/shopify\/SellingPlan\/7861371183\\\",\\\"frequencyType\\\":\\\"ON_PURCHASE_DAY\\\",\\\"specificDayValue\\\":null,\\\"specificDayEnabled\\\":false,\\\"maxCycles\\\":null,\\\"minCycles\\\":3,\\\"cutOff\\\":0,\\\"prepaidFlag\\\":\\\"false\\\",\\\"idNew\\\":\\\"gid:\/\/shopify\/SellingPlan\/7861371183\\\",\\\"planType\\\":\\\"PAY_AS_YOU_GO\\\",\\\"deliveryPolicyPreAnchorBehavior\\\":\\\"ASAP\\\",\\\"freeTrialEnabled\\\":false,\\\"freeTrialCount\\\":null,\\\"freeTrialInterval\\\":null,\\\"frequencyDescription\\\":null}],\\\"groupName\\\":\\\"Platinum Membership\\\",\\\"productIds\\\":\\\"[]\\\",\\\"productId\\\":null,\\\"variantIds\\\":\\\"[{\\\\\\\"id\\\\\\\":44854777086255,\\\\\\\"title\\\\\\\":\\\\\\\"Platinum Membership - Default Title\\\\\\\"}]\\\",\\\"accessoryProductIds\\\":null,\\\"customerTag\\\":\\\"platinum-membership\\\",\\\"orderTag\\\":\\\"Platinum Member\\\",\\\"rulesJson\\\":\\\"[{\\\\\\\"rule\\\\\\\":\\\\\\\"alternateTemplate\\\\\\\",\\\\\\\"selector\\\\\\\":\\\\\\\".product-form\\\\\\\",\\\\\\\"message\\\\\\\":\\\\\\\"You need to be a Silver Member to rent this product.\\\\\\\",\\\\\\\"path\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"pathMatch\\\\\\\":\\\\\\\"contains\\\\\\\",\\\\\\\"discountCode\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountMessage\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountUrl\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"deliveryFrequency\\\\\\\":\\\\\\\"Monthly\\\\\\\",\\\\\\\"limitAccessType\\\\\\\":\\\\\\\"templates\/product\\\\\\\",\\\\\\\"elementRestrictType\\\\\\\":\\\\\\\"category\\\\\\\",\\\\\\\"bucketCategory\\\\\\\":\\\\\\\"tags\\\\\\\",\\\\\\\"bucketCategoryValue\\\\\\\":\\\\\\\"Silver Member\\\\\\\",\\\\\\\"discountCodeText\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountPercentage\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountAmount\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountCodeDetails\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"templateFileName\\\\\\\":\\\\\\\"product.platinum-membership.json\\\\\\\"}]\\\",\\\"formFieldsJson\\\":\\\"[{\\\\\\\"label\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"type\\\\\\\":\\\\\\\"text\\\\\\\",\\\\\\\"required\\\\\\\":false,\\\\\\\"visible\\\\\\\":false}]\\\"}\",\"productIds\":\"\",\"variantIds\":\"44854777086255\",\"variantProductIds\":\"8228433789231\",\"customerTag\":\"platinum-membership\",\"orderTag\":\"Platinum Member\",\"rulesJson\":\"[{\\\"rule\\\":\\\"alternateTemplate\\\",\\\"selector\\\":\\\".product-form\\\",\\\"message\\\":\\\"You need to be a Silver Member to rent this product.\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"\\\",\\\"discountMessage\\\":\\\"\\\",\\\"discountUrl\\\":\\\"\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"templates\/product\\\",\\\"elementRestrictType\\\":\\\"category\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"Silver Member\\\",\\\"discountCodeText\\\":\\\"\\\",\\\"discountPercentage\\\":\\\"\\\",\\\"discountAmount\\\":\\\"\\\",\\\"discountCodeDetails\\\":\\\"\\\",\\\"templateFileName\\\":\\\"product.platinum-membership.json\\\"}]\",\"formFieldsJson\":\"[{\\\"label\\\":\\\"\\\",\\\"type\\\":\\\"text\\\",\\\"required\\\":false,\\\"visible\\\":false}]\",\"savedSearchId\":null,\"savedSegmentSearchId\":\"gid:\/\/shopify\/Segment\/1020541042991\"}],\"gold-membership\":[{\"id\":5962,\"shop\":\"louerlesac.myshopify.com\",\"groupName\":\"Gold Membership\",\"subscriptionId\":1482588463,\"productCount\":0,\"productVariantCount\":0,\"infoJson\":\"{\\\"id\\\":1482588463,\\\"productCount\\\":0,\\\"productVariantCount\\\":null,\\\"subscriptionPlans\\\":[{\\\"frequencyCount\\\":30,\\\"frequencyInterval\\\":\\\"DAY\\\",\\\"billingFrequencyCount\\\":30,\\\"billingFrequencyInterval\\\":\\\"DAY\\\",\\\"frequencyName\\\":\\\"Gold Membership\\\",\\\"discountOffer\\\":null,\\\"discountOffer2\\\":null,\\\"afterCycle1\\\":0,\\\"afterCycle2\\\":0,\\\"discountType\\\":null,\\\"discountType2\\\":null,\\\"discountEnabled\\\":false,\\\"discountEnabled2\\\":false,\\\"discountEnabledMasked\\\":false,\\\"discountEnabled2Masked\\\":false,\\\"id\\\":\\\"gid:\/\/shopify\/SellingPlan\/7835844911\\\",\\\"frequencyType\\\":\\\"ON_PURCHASE_DAY\\\",\\\"specificDayValue\\\":null,\\\"specificDayEnabled\\\":false,\\\"maxCycles\\\":null,\\\"minCycles\\\":3,\\\"cutOff\\\":0,\\\"prepaidFlag\\\":\\\"false\\\",\\\"idNew\\\":\\\"gid:\/\/shopify\/SellingPlan\/7835844911\\\",\\\"planType\\\":\\\"PAY_AS_YOU_GO\\\",\\\"deliveryPolicyPreAnchorBehavior\\\":\\\"ASAP\\\",\\\"freeTrialEnabled\\\":false,\\\"freeTrialCount\\\":null,\\\"freeTrialInterval\\\":null,\\\"frequencyDescription\\\":null}],\\\"groupName\\\":\\\"Gold Membership\\\",\\\"productIds\\\":\\\"[]\\\",\\\"productId\\\":null,\\\"variantIds\\\":\\\"[{\\\\\\\"id\\\\\\\":44854776627503,\\\\\\\"title\\\\\\\":\\\\\\\"Gold Membership - Default Title\\\\\\\"}]\\\",\\\"accessoryProductIds\\\":null,\\\"customerTag\\\":\\\"gold-membership\\\",\\\"orderTag\\\":\\\"Gold Member\\\",\\\"rulesJson\\\":\\\"[{\\\\\\\"rule\\\\\\\":\\\\\\\"alternateTemplate\\\\\\\",\\\\\\\"selector\\\\\\\":\\\\\\\".product-form\\\\\\\",\\\\\\\"message\\\\\\\":\\\\\\\"You need to be a Silver Member to rent this product.\\\\\\\",\\\\\\\"path\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"pathMatch\\\\\\\":\\\\\\\"contains\\\\\\\",\\\\\\\"discountCode\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountMessage\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountUrl\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"deliveryFrequency\\\\\\\":\\\\\\\"Monthly\\\\\\\",\\\\\\\"limitAccessType\\\\\\\":\\\\\\\"templates\/product\\\\\\\",\\\\\\\"elementRestrictType\\\\\\\":\\\\\\\"category\\\\\\\",\\\\\\\"bucketCategory\\\\\\\":\\\\\\\"tags\\\\\\\",\\\\\\\"bucketCategoryValue\\\\\\\":\\\\\\\"Silver Member\\\\\\\",\\\\\\\"discountCodeText\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountPercentage\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountAmount\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountCodeDetails\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"templateFileName\\\\\\\":\\\\\\\"product.gold-membership.json\\\\\\\"}]\\\",\\\"formFieldsJson\\\":\\\"[{\\\\\\\"label\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"type\\\\\\\":\\\\\\\"text\\\\\\\",\\\\\\\"required\\\\\\\":false,\\\\\\\"visible\\\\\\\":false}]\\\"}\",\"productIds\":\"\",\"variantIds\":\"44854776627503\",\"variantProductIds\":\"8228433396015\",\"customerTag\":\"gold-membership\",\"orderTag\":\"Gold Member\",\"rulesJson\":\"[{\\\"rule\\\":\\\"alternateTemplate\\\",\\\"selector\\\":\\\".product-form\\\",\\\"message\\\":\\\"You need to be a Silver Member to rent this product.\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"\\\",\\\"discountMessage\\\":\\\"\\\",\\\"discountUrl\\\":\\\"\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"templates\/product\\\",\\\"elementRestrictType\\\":\\\"category\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"Silver Member\\\",\\\"discountCodeText\\\":\\\"\\\",\\\"discountPercentage\\\":\\\"\\\",\\\"discountAmount\\\":\\\"\\\",\\\"discountCodeDetails\\\":\\\"\\\",\\\"templateFileName\\\":\\\"product.gold-membership.json\\\"}]\",\"formFieldsJson\":\"[{\\\"label\\\":\\\"\\\",\\\"type\\\":\\\"text\\\",\\\"required\\\":false,\\\"visible\\\":false}]\",\"savedSearchId\":null,\"savedSegmentSearchId\":null}]}",
        "nonMemberOnlySellingPlansJson": {},
        "sellingPlansJson": [{"frequencyCount":30,"frequencyInterval":"DAY","billingFrequencyCount":30,"billingFrequencyInterval":"DAY","frequencyName":"Silver Membership","afterCycle1":0,"afterCycle2":0,"discountEnabled":false,"discountEnabled2":false,"discountEnabledMasked":false,"discountEnabled2Masked":false,"id":"gid://shopify/SellingPlan/7834927407","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"minCycles":3,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/7834927407","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false},{"frequencyCount":30,"frequencyInterval":"DAY","billingFrequencyCount":30,"billingFrequencyInterval":"DAY","frequencyName":"Gold Membership","afterCycle1":0,"afterCycle2":0,"discountEnabled":false,"discountEnabled2":false,"discountEnabledMasked":false,"discountEnabled2Masked":false,"id":"gid://shopify/SellingPlan/7835844911","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"minCycles":3,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/7835844911","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false},{"frequencyCount":30,"frequencyInterval":"DAY","billingFrequencyCount":30,"billingFrequencyInterval":"DAY","frequencyName":"Gold Membership","afterCycle1":0,"afterCycle2":0,"discountEnabled":false,"discountEnabled2":false,"discountEnabledMasked":false,"discountEnabled2Masked":false,"id":"gid://shopify/SellingPlan/7861371183","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"minCycles":3,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/7861371183","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false}],
        "widgetEnabled": true,
        "showTooltip" : true,
        "sortByDefaultSequence": false,
        "showSubOptionBeforeOneTime": false,
        "showStaticTooltip": false,
        "showAppstleLink": false,
        "sellingPlanTitleText" : "{{sellingPlanName}} ({{{sellingPlanPrice}}}\/delivery)",
        "oneTimePriceText" : "{{{price}}}",
        "selectedPayAsYouGoSellingPlanPriceText" : "{{{price}}}",
        "selectedPrepaidSellingPlanPriceText" : "{{{pricePerDelivery}}}",
        "selectedDiscountFormat" : "SAVE {{{selectedDiscountPercentage}}}",
        "manageSubscriptionBtnFormat" : "<a href='apps\/memberships' class='appstle_manageSubBtn' ><button class='btn' style='padding: 2px 20px'>Manage Membership<\/button><a><br><br>",
        "manageSubscriptionUrl" : "apps\/memberships",
        "appstlePlanId": 2,
        "showCheckoutSubscriptionBtn": true,
        "disableLoadingJquery": false,
        "enableMessagingForNonMembers": "false",
        "nonMemberMessaging": "Please login to avail the membership perks.",
        "showMembershipBanner": "true",
        "showDiscountWidget": "false",
        "discountBadgeImageLink": "",
        "widgetBadgeImageLink": "",
        "productPagePriceDescriptionBlockPriceSelector": "",
        "productPagePriceDescriptionBlockParentSelector": "",
        "priceBlockSelector": "",
        "parentSelector": "",
        "reBuyEnabled": "false",
        "switchRadioButtonWidget": false,
        "enableAddJSInterceptor": false,
        "css": {
            "appstle_membership_widget": {
                "margin-top": "" ,
                "margin-bottom": "",
            },

            "appstle_membership_wrapper": {
                "border-width": "",
                "border-color": "",
            },

            "appstle_circle": {
                "border-color": "",
            },

            "appstle_dot": {
                "background-color": "",
            },

            "appstle_select": {
                "padding-top": "",
                "padding-bottom": "",
                "padding-left": "",
                "padding-right": "",
                "border-width": "",
                "border-style": "",
                "border-color": "",
                "border-radius": "",
            },

            "tooltip_subscription_svg": {
                "fill": "",
            },

            "appstle_tooltip": {
                "color": "",
                "background-color": "",
            },

            "appstle_tooltip_border_top_color": {
                "border-top-color": "",
            },

            "appstle_membership_final_price": {
                "color": "",
            },
            "appstle_widget_text_color": {
                "color": "",
            },
            "appstle_selected_background": {
                "background": "transparent",
            },
            "customCSS": "",
            "customerPortalCss": "",
            "priceSelector": "span.price-item.price-item--regular",
            "landingPagePriceSelector": "",
            "quickViewClickSelector": "",
            "badgeTop": "",
            "pricePlacement": "BEFORE",
        }
      };

    }

    function urlIsProductPage() {
    // return null != decodeURIComponent(window.location.pathname).match(/\/products\/(([a-zA-Z0-9]|[\-\.\_\~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[\ud83c\ud83d\ud83e][\ud000-\udfff]){1,})\/?/)
    return decodeURIComponent(window.location.pathname).includes('/products/');
    }
  }
)(window);

