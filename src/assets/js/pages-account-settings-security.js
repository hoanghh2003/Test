"use strict";
document.addEventListener("DOMContentLoaded", function(e) {
    {
        const t = document.querySelector("#formAccountSettings")
          , n = document.querySelector("#formAccountSettingsApiKey");
        t && FormValidation.formValidation(t, {
            fields: {
                currentPassword: {
                    validators: {
                        notEmpty: {
                            message: "Please current password"
                        },
                        stringLength: {
                            min: 8,
                            message: "Password must be more than 8 characters"
                        }
                    }
                },
                newPassword: {
                    validators: {
                        notEmpty: {
                            message: "Please enter new password"
                        },
                        stringLength: {
                            min: 8,
                            message: "Password must be more than 8 characters"
                        }
                    }
                },
                confirmPassword: {
                    validators: {
                        notEmpty: {
                            message: "Please confirm new password"
                        },
                        identical: {
                            compare: function() {
                                return t.querySelector('[name="newPassword"]').value
                            },
                            message: "The password and its confirm are not the same"
                        },
                        stringLength: {
                            min: 8,
                            message: "Password must be more than 8 characters"
                        }
                    }
                }
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger,
                bootstrap5: new FormValidation.plugins.Bootstrap5({
                    eleValidClass: "",
                    rowSelector: ".col-md-6"
                }),
                submitButton: new FormValidation.plugins.SubmitButton,
                autoFocus: new FormValidation.plugins.AutoFocus
            },
            init: e=>{
                e.on("plugins.message.placed", function(e) {
                    e.element.parentElement.classList.contains("input-group") && e.element.parentElement.insertAdjacentElement("afterend", e.messageElement)
                })
            }
        }),
        n && FormValidation.formValidation(n, {
            fields: {
                apiKey: {
                    validators: {
                        notEmpty: {
                            message: "Please enter API key name"
                        }
                    }
                }
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger,
                bootstrap5: new FormValidation.plugins.Bootstrap5({
                    eleValidClass: ""
                }),
                submitButton: new FormValidation.plugins.SubmitButton,
                autoFocus: new FormValidation.plugins.AutoFocus
            },
            init: e=>{
                e.on("plugins.message.placed", function(e) {
                    e.element.parentElement.classList.contains("input-group") && e.element.parentElement.insertAdjacentElement("afterend", e.messageElement)
                })
            }
        })
    }
}),
$(function() {
    var e = $(".select2");
    e.length && e.each(function() {
        var e = $(this);
        e.wrap('<div class="position-relative"></div>'),
        e.select2({
            dropdownParent: e.parent()
        })
    })
});
