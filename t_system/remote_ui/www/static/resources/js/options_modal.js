const options_player_div = document.getElementById("options_player_div");
const options_video = document.getElementById("options_video");
const close_options_player_btn = document.getElementById("close_options_player_btn");
const options_player_source = document.getElementById("options_player_source");

const options_image_viewer_div = document.getElementById("options_image_viewer_div");
const close_options_image_viewer_btn = document.getElementById("close_options_image_viewer_btn");
const options_image_viewer_img = document.getElementById("options_image_viewer_img");

const update_control_div = document.getElementById("update_control_div");
const update_control_btn = document.getElementById("update_control_btn");
const update_control_io_div = document.getElementById("update_control_io_div");
const auto_update_checkbox = document.getElementById("auto_update_checkbox");
const update_btn = document.getElementById("update_btn");

const wifi_control_div = document.getElementById("wifi_control_div");
const wifi_connections_btn = document.getElementById("wifi_connections_btn");
const create_wifi_checkbox = document.getElementById("create_wifi_checkbox");
const wifi_control_io_div = document.getElementById("wifi_control_io_div");
const create_new_network = document.getElementById("create_new_network");
const network_ssid_input = document.getElementById("network_ssid_input");
const network_password_input = document.getElementById("network_password_input");
const network_pass_eye_span = document.getElementById("network_pass_eye_span");
const create_new_network_btn = document.getElementById("create_new_network_btn");
const network_list_ul = document.getElementById("network_list_ul");

const audio_control_div = document.getElementById("audio_control_div");
const audio_control_btn = document.getElementById("audio_control_btn");
const audio_control_io_div = document.getElementById("audio_control_io_div");

const face_encoding_div = document.getElementById("face_encoding_div");
const face_encoding_btn = document.getElementById("face_encoding_btn");
const face_encoding_io_div = document.getElementById("face_encoding_io_div");
const face_encoding_form = document.getElementById("face_encoding_form");
const face_name_input = document.getElementById("face_name_input");
const f_enc_photo_input = document.getElementById("f_enc_photo_input");
const f_enc_photo_label = document.getElementById("f_enc_photo_label");
const encode_new_face_btn = document.getElementById("encode_new_face_btn");
const encoded_face_list_ul = document.getElementById("encoded_face_list_ul");
const processing_animation_div = document.getElementById("processing_animation_div");
const processing_animation = document.getElementById("processing_animation");

const record_control_div = document.getElementById("record_control_div");
const record_control_btn = document.getElementById("record_control_btn");
const record_control_io_div = document.getElementById("record_control_io_div");
const record_list_ul = document.getElementById("record_list_ul");

const identity_control_div = document.getElementById("identity_control_div");
const identity_control_btn = document.getElementById("identity_control_btn");
const identity_control_io_div = document.getElementById("identity_control_io_div");
const identity_public_id_div = document.getElementById("identity_public_id_div");
const identity_public_id_span = document.getElementById("identity_public_id_span");
const identity_name_div = document.getElementById("identity_name_div");
const identity_name_span = document.getElementById("identity_name_span");
const identity_private_id_div = document.getElementById("identity_private_id_div");
const identity_private_id_span = document.getElementById("identity_private_id_span");

const live_streaming_div = document.getElementById("live_streaming_div");
const live_streaming_btn = document.getElementById("live_streaming_btn");
const live_streaming_io_div = document.getElementById("live_streaming_io_div");
const ls_websites_ul = document.getElementById("ls_websites_ul");
const create_website_div = document.getElementById("create_website_div");
const create_website_btn = document.getElementById("create_website_btn");

const website_creation_div = document.getElementById("website_creation_div");
const website_name_input = document.getElementById("website_name_input");
const website_url_input = document.getElementById("website_url_input");
const website_server_input = document.getElementById("website_server_input");
const web_cre_create_btn = document.getElementById("web_cre_create_btn");
const web_cre_cancel_btn = document.getElementById("web_cre_cancel_btn");

const stream_id_creation_div = document.getElementById("stream_id_creation_div");
const stream_acc_name_input = document.getElementById("stream_acc_name_input");
const stream_acc_key_input = document.getElementById("stream_acc_key_input");
const stream_cre_create_btn = document.getElementById("stream_cre_create_btn");
const stream_cre_cancel_btn = document.getElementById("stream_cre_cancel_btn");

const r_sync_div = document.getElementById("r_sync_div");
const r_sync_btn = document.getElementById("r_sync_btn");
const r_sync_io_div = document.getElementById("r_sync_io_div");
const r_sync_animation_div = document.getElementById("r_sync_animation_div");
const r_sync_animation = document.getElementById("r_sync_animation");
const r_sync_services_ul = document.getElementById("r_sync_services_ul");
const service_select_dd_div = document.getElementById("service_select_dd_div");
const service_select_dd_btn = document.getElementById("service_select_dd_btn");
const service_list_ul = document.getElementById("service_list_ul");
const auto_r_sync_switch_checkbox = document.getElementById("auto_r_sync_switch_checkbox");

const r_sync_account_creation_div = document.getElementById("r_sync_account_creation_div");
const r_sync_acc_name_input = document.getElementById("r_sync_acc_name_input");
const r_sync_acc_key_input = document.getElementById("r_sync_acc_key_input");
const r_sync_account_cre_create_btn = document.getElementById("r_sync_account_cre_create_btn");
const r_sync_account_cre_cancel_btn = document.getElementById("r_sync_account_cre_cancel_btn");

const r_sync_sync_btn = document.getElementById("r_sync_sync_btn");

const advanced_switch_div = document.getElementById("advanced_switch_div");
const advanced_switch_btn = document.getElementById("advanced_switch_btn");
const advanced_switch_io_div = document.getElementById("advanced_switch_io_div");
const advanced_activate_checkbox = document.getElementById("advanced_activate_checkbox");

const lang_select_div = document.getElementById("lang_select_div");
const lang_select_btn = document.getElementById("lang_select_btn");
const lang_select_io_div = document.getElementById("lang_select_io_div");
const lang_select_dd_btn = document.getElementById("lang_select_dd_btn");
const lang_list_ul = document.getElementById("lang_list_ul");

const help_control_div = document.getElementById("help_control_div");
const help_control_btn = document.getElementById("help_control_btn");
const help_control_io_div = document.getElementById("help_control_io_div");

const switching_control_div = document.getElementById("switching_control_div");
const switching_control_btn = document.getElementById("switching_control_btn");
const switching_control_io_div = document.getElementById("switching_control_io_div");
const switching_disconnect_btn = document.getElementById("switching_disconnect_btn");
const switching_disconnect_btn_i = document.getElementById("switching_disconnect_btn_i");
const switching_reboot_btn = document.getElementById("switching_reboot_btn");
const switching_reboot_btn_i = document.getElementById("switching_reboot_btn_i");
const switching_shutdown_btn = document.getElementById("switching_shutdown_btn");
const switching_shutdown_btn_i = document.getElementById("switching_shutdown_btn_i");

/**
 * Method to create drop-down language selection menu.
 */
function build_language_menu() {

    let lang_dropdown_row_div;
    for (let i = 0; i < language_list.length; i++) {

        if (i % 2 === 0) {
            lang_dropdown_row_div = document.createElement('div');
            lang_dropdown_row_div.classList.add("position-relative", "row", "lang_row");

            lang_list_ul.appendChild(lang_dropdown_row_div);
        }

        let lang_dropdown_col_div = document.createElement('div');
        lang_dropdown_col_div.classList.add("position-relative", "col-*", "lang_col", "ml-2");


        let lang_div = document.createElement('div');
        let lang_btn = document.createElement('button');

        lang_btn.classList.add("btn", "btn-light", "lang_btn", "cut-text", "mb-2");
        lang_btn.innerHTML = language_list[i][1];

        lang_btn.addEventListener("click", function () {
            translate_text(language_list[i][0].toString(), lang_select_dd_btn);
        });

        lang_div.appendChild(lang_btn);
        lang_dropdown_col_div.appendChild(lang_div);
        lang_dropdown_row_div.appendChild(lang_dropdown_col_div);

        if (language_list[i][0] === language) {
            lang_select_dd_btn.innerHTML = language_list[i][1];
        }
    }
}

function close_opened_option(option_btn) {
    if (event.target === event.currentTarget) {
        option_btn.click();
    } else {
    }
}


let update_control_btn_click_count = 0;
let update_control_btn_lis_bind = close_opened_option.bind(null, update_control_btn);

update_control_btn.addEventListener("click", function () {

    dark_overlay_active = !dark_deep_background_div.classList.contains("focused");
    dark_deep_background_div.classList.toggle("focused");

    toggle_elements([wifi_control_div, audio_control_div, face_encoding_div, record_control_div, identity_control_div, live_streaming_div, r_sync_div, advanced_switch_div, lang_select_div, help_control_div, switching_control_div]);
    update_control_div.classList.toggle("col");
    update_control_div.classList.toggle("focused");
    update_control_div.classList.toggle("higher");
    update_control_io_div.classList.toggle("focused");

    update_control_btn_click_count++;
    if (update_control_btn_click_count <= 1) {

        dark_deep_background_div.addEventListener("click", update_control_btn_lis_bind);
        options_template_container.addEventListener("click", update_control_btn_lis_bind);

        setSwiperSwiping(false);

        request_asynchronous('/api/update?key=auto_update&admin_id=' + admin_id, 'GET',
            'application/x-www-form-urlencoded; charset=UTF-8', null, function (requested_data, err) {
                if (err === "success") {
                    if (requested_data["status"] === "OK") {
                        console.log(requested_data["data"]);
                        if (requested_data["data"] && !auto_update_checkbox.checked) {
                            $("#auto_update_checkbox").bootstrapToggle("toggle");
                        } else if (!requested_data["data"] && auto_update_checkbox.checked) {
                            $("#auto_update_checkbox").bootstrapToggle("toggle");
                        }
                    }
                }
            });

    } else {
        dark_deep_background_div.removeEventListener("click", update_control_btn_lis_bind);
        options_template_container.removeEventListener("click", update_control_btn_lis_bind);

        $('#swiper_wrapper').removeClass("disabled");

        update_control_btn_click_count = 0;
    }
});

$('#auto_update_checkbox').change(function () {
    if (auto_update_checkbox.checked) {
        let data = {"auto_update": true};

        request_asynchronous('/api/update?admin_id=' + admin_id, 'PUT',
            'application/json; charset=UTF-8', data, function (req, err, response) {
                if (err === "success") {
                    let response_data = JSON.parse(response.responseText);
                }
            });
    } else {
        let data = {"auto_update": false};

        request_asynchronous('/api/update?admin_id=' + admin_id, 'PUT',
            'application/json; charset=UTF-8', data, function (req, err, response) {
                if (err === "success") {
                    let response_data = JSON.parse(response.responseText);
                }
            });
    }
});

update_btn.addEventListener("click", function () {
    // Todo: Response will handled. for response arrive, button will be disabled. and maybe for update completed, Remote UI will sleep, shutdown or locked. decide that.

    request_asynchronous('/api/update?admin_id=' + admin_id, 'POST',
        'application/x-www-form-urlencoded; charset=UTF-8', {}, function (req, err, response) {
            if (err === "success") {
                let response_data = JSON.parse(response.responseText);
            }
        });
});

let wifi_connections_btn_click_count = 0;
let wifi_connections_btn_lis_bind = close_opened_option.bind(null, wifi_connections_btn);

wifi_connections_btn.addEventListener("click", function () {

    dark_overlay_active = !dark_deep_background_div.classList.contains("focused");
    dark_deep_background_div.classList.toggle("focused");

    toggle_elements([update_control_div, audio_control_div, face_encoding_div, record_control_div, identity_control_div, live_streaming_div, r_sync_div, advanced_switch_div, lang_select_div, help_control_div, switching_control_div]);
    wifi_control_div.classList.toggle("col");
    wifi_control_div.classList.toggle("focused");
    wifi_control_div.classList.toggle("higher");
    wifi_control_io_div.classList.toggle("focused");

    wifi_connections_btn_click_count++;
    if (wifi_connections_btn_click_count <= 1) {

        dark_deep_background_div.addEventListener("click", wifi_connections_btn_lis_bind);
        options_template_container.addEventListener("click", wifi_connections_btn_lis_bind);

        setSwiperSwiping(false);

        request_asynchronous('/api/network?admin_id=' + admin_id, 'GET',
            'application/x-www-form-urlencoded; charset=UTF-8', null, function (requested_data, err) {
                // err = "success";
                // requested_data = {"status": "OK", "data": [{"ssid": "Beyaz", "password": "arge"}, {"ssid": "new_wifi", "password": "1234"}, {"ssid": "demo", "password": "bla"}]};
                if (err === "success") {
                    if (requested_data["status"] === "OK") {
                        let network_connections = requested_data["data"];

                        for (let c = 0; c < network_connections.length; c++) {

                            let wifi_dropdown_div = document.createElement('div');
                            let wifi_btn = document.createElement('button');
                            let wifi_dropdown_container_div = document.createElement('div');

                            wifi_dropdown_div.classList.add("dropdown", "btn-group", "mt-1");

                            wifi_btn.classList.add("btn", "btn-secondary", "dropdown-toggle", "cut-text");
                            wifi_btn.type = "button";
                            wifi_btn.id = network_connections[c]["ssid"] + "_btn";
                            wifi_btn.setAttribute("data-toggle", "dropdown");
                            wifi_btn.setAttribute("aria-haspopup", "true");
                            wifi_btn.setAttribute("aria-expanded", "false");
                            wifi_btn.innerHTML = network_connections[c]["ssid"];

                            wifi_dropdown_container_div.classList.add("dropdown-menu", "dropdown-menu-right", "dropdown-menu-center", "body_background", "no-border");
                            wifi_dropdown_container_div.setAttribute("aria-labelledby", wifi_btn.id);

                            // let ssid_output = document.createElement('output');
                            let password_div = document.createElement('div');
                            let password_input = document.createElement('input');
                            let password_update_btn = document.createElement('button');

                            password_div.classList.add("dropdown-item");

                            password_input.type = "password";
                            password_input.classList.add("modal_input", "existing_network_password");
                            password_input.value = network_connections[c]["password"];

                            let password_last_value = password_input.value;

                            password_input.addEventListener("focus", function () {
                                password_input.classList.add("focused");
                            });

                            password_input.addEventListener("blur", function () {
                                password_input.classList.remove("focused");
                            });

                            password_input.addEventListener("mousemove", function () {
                                if (password_input.value !== "" && password_input.value !== password_last_value) {
                                    password_input.classList.add("changed");
                                    show_element(password_update_btn);
                                } else {
                                    password_input.classList.remove("changed");
                                    hide_element(password_update_btn);
                                }
                            });


                            password_update_btn.classList.add("send_network_data_btn");
                            password_update_btn.innerHTML = "&#187;";

                            password_update_btn.addEventListener("click", function () {
                                let data = {"ssid": network_connections[c]["ssid"], "password": password_input.value};

                                request_asynchronous('/api/network?ssid=' + network_connections[c]["ssid"] + '&admin_id=' + admin_id, 'PUT',
                                    'application/x-www-form-urlencoded; charset=UTF-8', data, function (req, err, response) {
                                        if (err === "success") {
                                            let response_data = JSON.parse(response.responseText);
                                        }
                                    });

                                wifi_connections_btn.click();
                                wifi_connections_btn.click();
                            });

                            password_div.appendChild(password_input);
                            password_div.appendChild(password_update_btn);

                            wifi_dropdown_container_div.appendChild(password_div);

                            wifi_dropdown_div.appendChild(wifi_btn);
                            wifi_dropdown_div.appendChild(wifi_dropdown_container_div);

                            network_list_ul.appendChild(wifi_dropdown_div);
                        }

                    }
                }
            });

        request_asynchronous('/api/network?activity=' + true + '&admin_id=' + admin_id, 'GET',
            'application/x-www-form-urlencoded; charset=UTF-8', null, function (requested_data, err) {
                // err = "success";
                // requested_data = {"status": "OK", "data": true};
                if (err === "success") {
                    if (requested_data["status"] === "OK") {
                        let activity = requested_data["data"];

                        if (activity) {
                            create_wifi_checkbox.checked = false
                        } else {
                            create_wifi_checkbox.checked = true;
                            create_new_network.classList.add("disabled");
                            network_list_ul.classList.add("disabled");
                        }
                    }
                }
            });

    } else {
        dark_deep_background_div.removeEventListener("click", wifi_connections_btn_lis_bind);
        options_template_container.removeEventListener("click", wifi_connections_btn_lis_bind);

        clearElement(network_list_ul);

        setSwiperSwiping(true);

        wifi_connections_btn_click_count = 0;
    }
});

create_wifi_checkbox.setAttribute("data-on", translate_text_item(" "));
create_wifi_checkbox.setAttribute("data-off", translate_text_item(" "));

$('#create_wifi_checkbox').change(function () {
    let data = {};

    request_asynchronous('/api/network?activity=' + create_wifi_checkbox.checked, 'POST',
        'application/x-www-form-urlencoded; charset=UTF-8', data, function (req, err, response) {
            if (err === "success") {
                let response_data = JSON.parse(response.responseText);
            }
        });

    if (create_wifi_checkbox.checked) {
        create_new_network.classList.add("disabled");
        network_list_ul.classList.add("disabled");
    } else {
        create_new_network.classList.remove("disabled");
        network_list_ul.classList.remove("disabled");
    }
    swal(translate_text_item("This process will be the effect after reboot!"), "", "info");
});

network_pass_eye_span.addEventListener("click", function () {
    if (network_password_input.type === 'password') {
        network_pass_eye_span.classList.remove("fa-eye");
        network_pass_eye_span.classList.add("fa-eye-slash");
        network_password_input.setAttribute('type', 'text');
    } else {
        network_pass_eye_span.classList.remove("fa-eye-slash");
        network_pass_eye_span.classList.add("fa-eye");
        network_password_input.setAttribute('type', 'password');
    }
});

function show_create_new_wifi_button() {
    if (network_ssid_input.value !== "" && network_password_input.value !== "") {
        network_ssid_input.classList.add("new_network_input_transition");
        network_password_input.classList.add("new_network_input_transition");
        show_element(create_new_network_btn);
    } else {
        network_ssid_input.classList.remove("new_network_input_transition");
        network_password_input.classList.remove("new_network_input_transition");
        hide_element(create_new_network_btn);
    }
}

network_ssid_input.addEventListener("mousemove", show_create_new_wifi_button);
network_password_input.addEventListener("mousemove", show_create_new_wifi_button);

create_new_network_btn.addEventListener("click", function () {

    let data = {"ssid": network_ssid_input.value, "password": network_password_input.value};

    request_asynchronous('/api/network', 'POST',
        'application/x-www-form-urlencoded; charset=UTF-8', data, function (req, err, response) {
            if (err === "success") {
                let response_data = JSON.parse(response.responseText);
                if (response_data["status"] === "OK") {
                    wifi_connections_btn.click();
                    wifi_connections_btn.click();

                    admin_id = response_data["admin_id"];
                    activateAdminAuthorityBy(admin_id);
                }
            }
        });

    network_ssid_input.value = "";
    network_password_input.value = "";
});

let audio_control_btn_click_count = 0;
let audio_control_btn_lis_bind = close_opened_option.bind(null, audio_control_btn);

audio_control_btn.addEventListener("click", function () {

    dark_overlay_active = !dark_deep_background_div.classList.contains("focused");
    dark_deep_background_div.classList.toggle("focused");
    toggle_elements([update_control_div, wifi_control_div, face_encoding_div, record_control_div, identity_control_div, live_streaming_div, r_sync_div, advanced_switch_div, lang_select_div, help_control_div, switching_control_div]);
    audio_control_div.classList.toggle("col");
    audio_control_div.classList.toggle("focused");
    audio_control_div.classList.toggle("higher");
    audio_control_io_div.classList.toggle("focused");

    audio_control_btn_click_count++;
    if (audio_control_btn_click_count <= 1) {
        dark_deep_background_div.addEventListener("click", audio_control_btn_lis_bind);
        options_template_container.addEventListener("click", audio_control_btn_lis_bind);

        setSwiperSwiping(false);

    } else {
        dark_deep_background_div.removeEventListener("click", audio_control_btn_lis_bind);
        options_template_container.removeEventListener("click", audio_control_btn_lis_bind);

        setSwiperSwiping(true);

        audio_control_btn_click_count = 0;
    }
});

let face_encoding_btn_click_count = 0;
let face_encoding_btn_lis_bind = close_opened_option.bind(null, face_encoding_btn);

face_encoding_btn.addEventListener("click", function () {

    dark_overlay_active = !dark_deep_background_div.classList.contains("focused");
    dark_deep_background_div.classList.toggle("focused");
    toggle_elements([update_control_div, wifi_control_div, audio_control_div, record_control_div, identity_control_div, live_streaming_div, r_sync_div, advanced_switch_div, lang_select_div, help_control_div, switching_control_div]);
    face_encoding_div.classList.toggle("col");
    face_encoding_div.classList.toggle("focused");
    face_encoding_div.classList.toggle("higher");
    face_encoding_io_div.classList.toggle("focused");

    face_encoding_btn_click_count++;
    if (face_encoding_btn_click_count <= 1) {

        dark_deep_background_div.addEventListener("click", face_encoding_btn_lis_bind);
        options_template_container.addEventListener("click", face_encoding_btn_lis_bind);

        setSwiperSwiping(false);

        request_asynchronous('/api/face_encoding?admin_id=' + admin_id, 'GET',
            'application/x-www-form-urlencoded; charset=UTF-8', null, function (requested_data, err) {
                // err = "success";
                // requested_data = {"status": "OK", "data": [{"id": "z970136a-aegb-15e9-b130-cy2f756671ed", "name": "face_name", "image_names": ["im-n1", "im-n2", "im-n3", "im-n4", "im-n5"]}]};

                if (err === "success") {
                    if (requested_data["status"] === "OK") {
                        for (let c = 0; c < requested_data["data"].length; c++) {

                            let face_dropdown_div = document.createElement('div');
                            let face_pp_img = document.createElement('img');
                            let face_a = document.createElement('a');
                            let face_dropdown_container_div = document.createElement('div');

                            face_dropdown_div.classList.add("dropdown", "show", "mb-1");

                            let src = "/api/face_encoding?id=" + requested_data["data"][c]["id"] + "&image=" + requested_data["data"][c]["image_names"][0] + "&admin_id=" + admin_id;   // this url assigning creates a GET request.
                            // let src = "static/resources/images/favicon.png" + "# " + new Date().getTime();

                            resize_image(src, 30, 40, face_pp_img);

                            face_a.classList.add("btn", "btn-secondary", "dropdown-toggle", "cut-text", "face_a", "ml-1");
                            face_a.href = "#";
                            face_a.role = "button";
                            face_a.id = requested_data["data"][c]["name"] + "_a";
                            face_a.setAttribute("data-toggle", "dropdown");
                            face_a.setAttribute("aria-haspopup", "true");
                            face_a.setAttribute("aria-expanded", "false");
                            face_a.innerHTML = requested_data["data"][c]["name"].replace(/_/gi, " ");
                            face_a.title = face_a.innerHTML;

                            face_dropdown_container_div.classList.add("dropdown-menu", "dropdown-menu-right", "dropdown_menu", "face_encoding_dropdown_menu", "container");
                            face_dropdown_container_div.setAttribute("aria-labelledby", face_a.id);

                            let face_dropdown_row_div;
                            for (let i = 0; i < requested_data["data"][c]["image_names"].length; i++) {

                                if (i % 3 === 0) {
                                    face_dropdown_row_div = document.createElement('div');
                                    face_dropdown_row_div.classList.add("row", "mb-1", "face_row");
                                }

                                let face_dropdown_col_div = document.createElement('div');
                                face_dropdown_col_div.classList.add("col-*", "ml-2");

                                let face_div = document.createElement('div');
                                let face_img = document.createElement('img');

                                face_div.id = requested_data["data"][c]["image_names"][i];
                                face_div.classList.add("face_div");

                                let src = "/api/face_encoding?id=" + requested_data["data"][c]["id"] + "&image=" + requested_data["data"][c]["image_names"][i] + "&admin_id=" + admin_id;   // this url assigning creates a GET request.
                                resize_image(src, 25, 40, face_img);

                                interact('#' + face_div.id)
                                    .on('tap', function (event) {
                                    })
                                    .on('doubletap', function (event) {
                                        let route = "/api/face_encoding?id=" + requested_data["data"][c]["id"] + "&image=" + requested_data["data"][c]["image_names"][0] + "&download=" + true + "&admin_id=" + admin_id;

                                        request_asynchronous(route, 'GET',
                                            'application/x-www-form-urlencoded; charset=UTF-8', null, function (requested_data, err) {
                                                if (err === "success") {
                                                }
                                            });
                                    })
                                    .on('hold', function (event) {
                                        console.log("triggered haaa?");
                                        face_encoding_div.classList.add("hidden_element");
                                        options_image_viewer_div.classList.add("focused");
                                        options_image_viewer_img.src = src;

                                    })
                                    .on('up', function (event) {
                                        options_image_viewer_div.classList.remove("focused");
                                        options_image_viewer_img.src = "";
                                        face_encoding_div.classList.remove("hidden_element");
                                    });

                                face_div.appendChild(face_img);
                                face_dropdown_col_div.appendChild(face_div);
                                face_dropdown_row_div.appendChild(face_dropdown_col_div);
                                face_dropdown_container_div.appendChild(face_dropdown_row_div);

                            }

                            face_dropdown_div.appendChild(face_pp_img);
                            face_dropdown_div.appendChild(face_a);
                            face_dropdown_div.appendChild(face_dropdown_container_div);

                            encoded_face_list_ul.appendChild(face_dropdown_div);
                        }
                    }
                }
            });

    } else {

        dark_deep_background_div.removeEventListener("click", face_encoding_btn_lis_bind);
        options_template_container.removeEventListener("click", face_encoding_btn_lis_bind);

        clearElement(encoded_face_list_ul);

        setSwiperSwiping(true);

        face_encoding_btn_click_count = 0;
    }
});

f_enc_photo_input.addEventListener("change", function (event) {
    if (event.target.files.length > 1) {
        f_enc_photo_label.innerHTML = event.target.files.length + " images uploaded";
    } else {
        f_enc_photo_label.innerHTML = event.target.files[0].name;
    }
});

encode_new_face_btn.addEventListener("click", function () {

    dark_deep_background_div.removeEventListener("click", face_encoding_btn_lis_bind);
    options_template_container.removeEventListener("click", face_encoding_btn_lis_bind);

    body.classList.add("disable_pointer");
    swiper_wrapper.classList.add("disabled");
    processing_animation.classList.add("lds-hourglass");
    processing_animation_div.classList.add("focused");

    face_name_input.value = face_name_input.value.replace(/ /gi, "_");

    // face_encoding_form.submit(function () {});

    request_asynchronous('/api/face_encoding?admin_id=' + admin_id, 'POST',
        'application/x-www-form-urlencoded; charset=UTF-8', $("#face_encoding_form").serialize(), function (req, err, response) {  // .serialize returns the dictionary form data.
            if (err === "success") {
                let response_data = JSON.parse(response.responseText);

                if (response_data["status"] === "OK") {
                    dark_deep_background_div.addEventListener("click", face_encoding_btn_lis_bind);
                    options_template_container.addEventListener("click", face_encoding_btn_lis_bind);

                    body.classList.remove("disable_pointer");
                    swiper_wrapper.classList.remove("disabled");
                    processing_animation_div.classList.remove("focused");
                    processing_animation.classList.remove("lds-hourglass");

                    face_encoding_btn.click();
                    face_encoding_btn.click();
                }
            }
        });

    face_name_input.value = "";

});

let record_interacts = [];
let record_control_btn_click_count = 0;
let record_control_btn_lis_bind = close_opened_option.bind(null, record_control_btn);

record_control_btn.addEventListener("click", function () {

    dark_overlay_active = !dark_deep_background_div.classList.contains("focused");
    dark_deep_background_div.classList.toggle("focused");

    toggle_elements([update_control_div, wifi_control_div, audio_control_div, face_encoding_div, identity_control_div, live_streaming_div, r_sync_div, advanced_switch_div, lang_select_div, help_control_div, switching_control_div]);
    record_control_div.classList.toggle("col");
    record_control_div.classList.toggle("focused");
    record_control_div.classList.toggle("higher");
    record_control_io_div.classList.toggle("focused");

    record_control_btn_click_count++;
    if (record_control_btn_click_count <= 1) {

        dark_deep_background_div.addEventListener("click", record_control_btn_lis_bind);
        options_template_container.addEventListener("click", record_control_btn_lis_bind);

        setSwiperSwiping(false);

        request_asynchronous('/api/record?admin_id=' + admin_id, 'GET',
            'application/x-www-form-urlencoded; charset=UTF-8', null, function (requested_data, err) {
                // err = "success"
                // requested_data = {"status": "OK", "data": ["22_05_2019", "23_05_2019", "27_05_2019", "27_05_2019", "27_05_2019", "27_05_2019", "27_05_2019", "27_05_2019", "27_05_2019"]};
                if (err === "success") {
                    if (requested_data["status"] === "OK") {
                        let record_dates = requested_data["data"];

                        for (let c = 0; c < record_dates.length; c++) {

                            let date_dropdown_div = document.createElement('div');
                            let date_btn = document.createElement('button');
                            let date_dropdown_container_div = document.createElement('div');

                            date_dropdown_div.classList.add("dropdown", "mt-1");
                            date_dropdown_div.id = "record_div_" + c;

                            date_btn.classList.add("btn", "btn-secondary", "dropdown-toggle");
                            date_btn.type = "button";
                            date_btn.id = record_dates[c] + "_btn";
                            date_btn.setAttribute("data-toggle", "dropdown");
                            date_btn.setAttribute("aria-haspopup", "true");
                            date_btn.setAttribute("aria-expanded", "false");
                            date_btn.innerHTML = record_dates[c].replace(/_/gi, "/"); // to replace all necessary characters.

                            date_dropdown_container_div.classList.add("dropdown-menu", "dropdown-menu-right", "dropdown_menu", "record_dropdown_menu");
                            date_dropdown_container_div.setAttribute("aria-labelledby", date_btn.id);

                            let date_btn_click_count = 0;
                            date_btn.addEventListener("click", function () {
                                date_btn_click_count++;
                                if (date_btn_click_count <= 1) {
                                    date_dropdown_container_div.classList.add("show");

                                    clearElement(date_dropdown_container_div);

                                    request_asynchronous('/api/record?date=' + record_dates[c] + '&admin_id=' + admin_id, 'GET',
                                        'application/x-www-form-urlencoded; charset=UTF-8', null, function (requested_data, err) {
                                            // err = "success"
                                            // requested_data = {"status": "OK", "data": [{"id": "b970138a-argb-11e9-b145-cc2f844671ed", "name": "record_name", "time": "12_27_54", "length": 180, "extension": "mp4"}]};
                                            if (err === "success") {
                                                if (requested_data["status"] === "OK") {
                                                    let shoots = requested_data["data"]["shoots"];
                                                    let shots = requested_data["data"]["shots"];

                                                    for (let i = 0; i < shoots.length; i++) {
                                                        let record_div = document.createElement('div');
                                                        let record_a = document.createElement('a');
                                                        let record_time_span = document.createElement('span');
                                                        let record_length_span = document.createElement('span');

                                                        let record_context_menu = document.createElement('div');
                                                        let record_cm_remove_a = document.createElement('a');
                                                        let record_cm_rename_a = document.createElement('a');
                                                        let record_cm_download_a = document.createElement('a');

                                                        record_div.classList.add("dropdown-item", "position-relative");
                                                        record_div.id = shoots[i]["id"];

                                                        record_a.classList.add("record_a");
                                                        record_a.role = "button";
                                                        record_a.innerHTML = shoots[i]["name"];
                                                        record_a.id = "record_a_" + c + "_" + i;

                                                        record_time_span.innerHTML = shoots[i]["time"].replace(/_/gi, ":");
                                                        record_time_span.classList.add("record_time_span");

                                                        record_length_span.innerHTML = shoots[i]["length"] + " min.";
                                                        record_length_span.classList.add("record_length_span");

                                                        record_a.addEventListener("click", function () {
                                                            record_control_div.classList.toggle("hidden_element");
                                                            options_player_div.classList.toggle("focused");

                                                            options_player_source.type = "video/" + shoots[i]["extension"];
                                                            options_player_source.src = "/api/record?id=" + shoots[i]["id"] + "&admin_id=" + admin_id;

                                                            // options_player_source.src = "static/resources/images/mov_bbb.mp4"+ "# " + new Date().getTime();
                                                            options_video.load()
                                                        });

                                                        function hide_record_context_menu() {
                                                            $("#" + record_context_menu.id).removeClass("show").hide();
                                                            document.removeEventListener("click", hide_record_context_menu);
                                                        }

                                                        let record_interact = interact('#' + record_a.id)
                                                            .on('tap', function (event) {

                                                                if (!record_context_menu.classList.contains("show")) {
                                                                }
                                                            })
                                                            .on('doubletap', function (event) {
                                                            })
                                                            .on('hold', function (event) {
                                                                record_a.classList.add("disable_pointer");

                                                                let target = event.target;
                                                                let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                                                                let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                                                                record_context_menu.setAttribute('data-x', x);
                                                                record_context_menu.setAttribute('data-y', y);

                                                                $("#" + record_context_menu.id).css({
                                                                    display: "block",
                                                                    transform: 'translate(' + x + 'px, ' + y + 'px)',
                                                                }).addClass("show");

                                                                setTimeout(function () {
                                                                    record_a.classList.remove("disable_pointer");
                                                                    document.addEventListener("click", hide_record_context_menu);
                                                                }, 500);

                                                                return false; //blocks default WebBrowser right click menu
                                                            })
                                                            .on('down', function (event) {
                                                            })
                                                            .on('up', function (event) {
                                                            });

                                                        record_interacts.push(record_interact);

                                                        record_context_menu.classList.add("position-relative", "dropdown-menu", "dropdown-menu-sm");
                                                        record_context_menu.id = record_dates[c] + shoots[i]["name"] + "_context_menu";

                                                        $("#" + record_context_menu.id + " a").on("click", function () {
                                                            $(this).parent().removeClass("show").hide();
                                                        });

                                                        record_cm_remove_a.classList.add("dropdown-item");
                                                        record_cm_remove_a.innerHTML = translate_text_item("remove");

                                                        record_cm_remove_a.addEventListener("click", function () {

                                                            request_asynchronous('/api/record?id=' + shoots[i]["id"] + '&admin_id=' + admin_id, 'DELETE',
                                                                'application/x-www-form-urlencoded; charset=UTF-8', null, function (req, err, response) {
                                                                    if (err === "success") {
                                                                        let response_data = JSON.parse(response.responseText);
                                                                        record_control_btn.click();
                                                                        record_control_btn.click();
                                                                        date_btn.click();
                                                                    }
                                                                });

                                                        });

                                                        record_cm_rename_a.classList.add("dropdown-item");
                                                        record_cm_rename_a.innerHTML = translate_text_item("rename");

                                                        record_cm_rename_a.addEventListener("click", function () {

                                                            record_div.removeChild(record_a);
                                                            record_div.removeChild(record_time_span);
                                                            record_div.removeChild(record_length_span);
                                                            record_div.removeChild(record_context_menu);

                                                            let record_input = document.createElement('input');

                                                            record_input.type = "text";
                                                            record_input.placeholder = record_a.innerHTML;
                                                            record_input.classList.add("action_name_input");

                                                            record_input.addEventListener("focusout", function () {
                                                                if (record_input.value !== record_a.innerHTML && record_input.value !== "") {
                                                                    let data = {"name": record_input.value};

                                                                    request_asynchronous('/api/record?id=' + shoots[i]["id"] + '&admin_id=' + admin_id, 'PUT',
                                                                        'application/x-www-form-urlencoded; charset=UTF-8', data, function (req, err, response) {
                                                                            if (err === "success") {
                                                                                let response_data = JSON.parse(response.responseText);
                                                                            }
                                                                        });
                                                                    record_a.innerHTML = record_input.value
                                                                }
                                                                record_div.removeChild(record_input);
                                                                record_div.appendChild(record_a);
                                                                record_div.appendChild(record_time_span);
                                                                record_div.appendChild(record_length_span);
                                                                record_div.appendChild(record_context_menu);

                                                            });
                                                            record_div.appendChild(record_input);
                                                            record_input.focus();

                                                        });

                                                        record_cm_download_a.classList.add("dropdown-item");
                                                        record_cm_download_a.innerHTML = translate_text_item("download");

                                                        record_cm_download_a.addEventListener("click", function () {
                                                            if (window.downloadRecord !== undefined) {
                                                                window.downloadRecord.postMessage("/api/record?date=" + record_dates[c] + "&id=" + shoots[i]["id"] + "&admin_id=" + admin_id);
                                                            }
                                                            record_cm_download_a.href = "/api/record?date=" + record_dates[c] + "&id=" + shoots[i]["id"] + "&admin_id=" + admin_id;
                                                        });


                                                        record_context_menu.appendChild(record_cm_remove_a);
                                                        record_context_menu.appendChild(record_cm_rename_a);
                                                        record_context_menu.appendChild(record_cm_download_a);

                                                        record_div.appendChild(record_a);
                                                        record_div.appendChild(record_time_span);
                                                        record_div.appendChild(record_length_span);

                                                        record_div.appendChild(record_context_menu);

                                                        date_dropdown_container_div.appendChild(record_div);
                                                    }

                                                    let shot_row_div;

                                                    for (let i = 0; i < shots.length; i++) {

                                                        if (i % 4 === 0) {
                                                            shot_row_div = document.createElement('div');
                                                            shot_row_div.classList.add("row", "mb-1", "face_row");
                                                        }

                                                        let shot_col_div = document.createElement('div');
                                                        shot_col_div.classList.add("col-*", "ml-2");

                                                        let shot_div = document.createElement('div');
                                                        let shot_img = document.createElement('img');

                                                        let shot_context_menu = document.createElement('div');
                                                        let shot_cm_remove_a = document.createElement('a');
                                                        let shot_cm_download_a = document.createElement('a');

                                                        shot_div.id = "date_" + c + "_shot" + i;
                                                        shot_div.classList.add("face_div");

                                                        let src = "/api/record?id=" + shots[i]["id"] + "&admin_id=" + admin_id;   // this url assigning creates a GET request.
                                                        resize_image(src, 25, 40, shot_img);

                                                        shot_img.id = "date_" + c + "_shot_img" + i;

                                                        function hide_shot_context_menu() {
                                                            $("#" + shot_context_menu.id).removeClass("show").hide();
                                                            document.removeEventListener("click", hide_shot_context_menu);
                                                        }

                                                        shot_img.addEventListener("click", function () {
                                                            record_control_div.classList.add("hidden_element");
                                                            options_image_viewer_div.classList.add("focused");
                                                            options_image_viewer_img.src = src;
                                                        });

                                                        let shot_interact = interact('#' + shot_img.id)
                                                            .on('tap', function (event) {
                                                                if (!shot_context_menu.classList.contains("show")) {
                                                                }
                                                            })
                                                            .on('doubletap', function (event) {

                                                            })
                                                            .on('hold', function (event) {
                                                                shot_img.classList.add("disable_pointer");

                                                                let target = event.target;
                                                                let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                                                                let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                                                                shot_context_menu.setAttribute('data-x', x);
                                                                shot_context_menu.setAttribute('data-y', y);

                                                                $("#" + shot_context_menu.id).css({
                                                                    display: "block",
                                                                    transform: 'translate(' + x + 'px, ' + y + 'px)',
                                                                }).addClass("show");

                                                                setTimeout(function () {
                                                                    shot_img.classList.remove("disable_pointer");
                                                                    document.addEventListener("click", hide_shot_context_menu);
                                                                }, 500);

                                                                return false; //blocks default WebBrowser right click menu
                                                            })
                                                            .on('up', function (event) {
                                                            });

                                                        record_interacts.push(shot_interact);

                                                        shot_context_menu.classList.add("position-relative", "dropdown-menu", "dropdown-menu-sm");
                                                        shot_context_menu.id = record_dates[c] + shots[i]["name"] + "_context_menu";

                                                        $("#" + shot_context_menu.id + " a").on("click", function () {
                                                            $(this).parent().removeClass("show").hide();
                                                        });

                                                        shot_cm_remove_a.classList.add("dropdown-item");
                                                        shot_cm_remove_a.innerHTML = translate_text_item("remove");

                                                        shot_cm_remove_a.addEventListener("click", function () {

                                                            request_asynchronous('/api/record?id=' + shots[i]["id"] + '&admin_id=' + admin_id, 'DELETE',
                                                                'application/x-www-form-urlencoded; charset=UTF-8', null, function (req, err, response) {
                                                                    if (err === "success") {
                                                                        let response_data = JSON.parse(response.responseText);
                                                                        record_control_btn.click();
                                                                        record_control_btn.click();
                                                                        date_btn.click();
                                                                    }
                                                                });
                                                        });

                                                        shot_cm_download_a.classList.add("dropdown-item");
                                                        shot_cm_download_a.innerHTML = translate_text_item("download");

                                                        shot_cm_download_a.addEventListener("click", function () {
                                                            if (window.downloadRecord !== undefined) {
                                                                window.downloadRecord.postMessage("/api/record?date=" + record_dates[c] + "&id=" + shots[i]["id"] + "&admin_id=" + admin_id);
                                                            }
                                                            shot_cm_download_a.href = "/api/record?date=" + record_dates[c] + "&id=" + shots[i]["id"] + "&admin_id=" + admin_id;
                                                        });

                                                        shot_context_menu.appendChild(shot_cm_remove_a);
                                                        shot_context_menu.appendChild(shot_cm_download_a);

                                                        shot_div.appendChild(shot_img);
                                                        shot_div.appendChild(shot_context_menu);

                                                        shot_col_div.appendChild(shot_div);
                                                        shot_row_div.appendChild(shot_col_div);
                                                        date_dropdown_container_div.appendChild(shot_row_div);
                                                    }
                                                }
                                            }
                                        });


                                } else {
                                    date_btn_click_count = 0;
                                    for (let i = 0; i < record_interacts.length; i++) {
                                        record_interacts[i].unset();
                                    }
                                    record_interacts = [];
                                    date_dropdown_container_div.classList.remove("show");
                                }
                            });
                            date_dropdown_div.appendChild(date_btn);
                            date_dropdown_div.appendChild(date_dropdown_container_div);

                            record_list_ul.appendChild(date_dropdown_div);
                        }
                    }
                }
            });

    } else {

        if (options_player_div.classList.contains("focused")) {
            close_options_player_btn.click();
        }

        // for (let i = 0; i < record_interacts.length; i++) {
        //     record_interacts[i].unset();
        // }
        // record_interacts = [];

        dark_deep_background_div.removeEventListener("click", record_control_btn_lis_bind);
        options_template_container.removeEventListener("click", record_control_btn_lis_bind);

        clearElement(record_list_ul);

        setSwiperSwiping(true);

        record_control_btn_click_count = 0;
    }
});

close_options_player_btn.addEventListener("click", function () {
    options_player_div.classList.toggle("focused");
    options_player_source.src = "";
    record_control_div.classList.toggle("hidden_element");
});

close_options_image_viewer_btn.addEventListener("click", function () {
    options_image_viewer_div.classList.remove("focused");
    options_image_viewer_img.src = "";
    record_control_div.classList.remove("hidden_element");
});

let identity_control_btn_click_count = 0;
let identity_control_btn_lis_bind = close_opened_option.bind(null, identity_control_btn);

identity_control_btn.addEventListener("click", function () {

    dark_overlay_active = !dark_deep_background_div.classList.contains("focused");
    dark_deep_background_div.classList.toggle("focused");

    toggle_elements([update_control_div, wifi_control_div, audio_control_div, face_encoding_div, record_control_div, live_streaming_div, r_sync_div, advanced_switch_div, lang_select_div, help_control_div, switching_control_div]);
    identity_control_div.classList.toggle("col");
    identity_control_div.classList.toggle("focused");
    identity_control_div.classList.toggle("higher");
    identity_control_io_div.classList.toggle("focused");

    identity_public_id_div.classList.toggle("identity_div");
    identity_private_id_div.classList.toggle("identity_div");
    identity_name_div.classList.toggle("identity_div");

    identity_control_btn_click_count++;
    if (identity_control_btn_click_count <= 1) {
        dark_deep_background_div.addEventListener("click", identity_control_btn_lis_bind);
        options_template_container.addEventListener("click", identity_control_btn_lis_bind);

        setSwiperSwiping(false);

        request_asynchronous('/api/identity?admin_id=' + admin_id, 'GET',
            'application/x-www-form-urlencoded; charset=UTF-8', null, function (requested_data, err) {
                if (err === "success") {
                    if (requested_data["status"] === "OK") {
                        let identity_info = requested_data["data"];

                        identity_public_id_span.classList.add("pale");
                        identity_public_id_span.innerHTML = identity_info["public_id"];
                        identity_public_id_span.title = identity_info["public_id"];

                        identity_name_span.innerHTML = identity_info["name"];
                        identity_name_span.title = identity_info["name"];

                        identity_name_span.addEventListener("click", function () {

                            identity_name_div.removeChild(identity_name_span);

                            let identity_name_input = document.createElement('input');

                            identity_name_input.type = "text";
                            identity_name_input.placeholder = identity_name_span.innerHTML;
                            identity_name_input.classList.add("identity_update_input");

                            identity_name_input.addEventListener("focusout", function () {
                                if (identity_name_input.value !== identity_name_span.innerHTML && identity_name_input.value !== "") {

                                    let data = {"public_id": null, "private_id": null, "name": identity_name_input.value};

                                    request_asynchronous('/api/identity?cause=name&admin_id=' + admin_id, 'PUT',
                                        'application/json; charset=UTF-8', data, function (req, err, response) {
                                            if (err === "success") {
                                                let response_data = JSON.parse(response.responseText);
                                                if (response_data["status"] === "OK") {
                                                    swal(translate_text_item("Device Name is now:") + "\n" + translate_text_item(identity_name_input.value), "", "success");
                                                    identity_name_span.innerHTML = identity_name_input.value
                                                } else if (response_data["status"] === "ERROR") {
                                                    swal(translate_text_item("Device Name changing failed!"), "", "error");
                                                }
                                            }
                                        });
                                }
                                identity_name_div.removeChild(identity_name_input);
                                identity_name_div.appendChild(identity_name_span);
                            });
                            identity_name_div.appendChild(identity_name_input);
                            identity_name_input.focus();
                        });

                        if (identity_info["private_id"] != null) {

                            identity_public_id_span.classList.remove("pale");

                            identity_public_id_span.addEventListener("click", function () {

                                identity_public_id_div.removeChild(identity_public_id_span);

                                let identity_public_id_input = document.createElement('input');

                                identity_public_id_input.type = "text";
                                identity_public_id_input.placeholder = identity_public_id_span.innerHTML;
                                identity_public_id_input.classList.add("identity_update_input");

                                identity_public_id_input.addEventListener("focusout", function () {
                                    if (identity_public_id_input.value !== identity_public_id_span.innerHTML && identity_public_id_input.value !== "") {

                                        let data = {"public_id": identity_public_id_input.value, "private_id": null, "name": null};

                                        request_asynchronous('/api/identity?cause=public_id&admin_id=' + admin_id, 'PUT',
                                            'application/json; charset=UTF-8', data, function (req, err, response) {
                                                if (err === "success") {
                                                    let response_data = JSON.parse(response.responseText);
                                                    if (response_data["status"] === "OK") {
                                                        swal(translate_text_item("Device Public ID is now:") + "\n" + translate_text_item(identity_public_id_input.value), "", "success");
                                                        identity_public_id_span.innerHTML = identity_public_id_input.value
                                                    } else if (response_data["status"] === "ERROR") {
                                                        swal(translate_text_item("Device Public ID changing failed!"), "", "error");
                                                    }
                                                }
                                            });
                                    }
                                    identity_public_id_div.removeChild(identity_public_id_input);
                                    identity_public_id_div.appendChild(identity_public_id_span);
                                });
                                identity_public_id_div.appendChild(identity_public_id_input);
                                identity_public_id_input.focus();
                            });

                            identity_private_id_div.classList.add("active");
                            identity_private_id_span.innerHTML = identity_info["private_id"];
                            identity_private_id_span.title = identity_info["private_id"];

                            identity_private_id_span.addEventListener("click", function () {

                                identity_private_id_div.removeChild(identity_private_id_span);

                                let identity_private_id_input = document.createElement('input');

                                identity_private_id_input.type = "text";
                                identity_private_id_input.placeholder = identity_private_id_span.innerHTML;
                                identity_private_id_input.classList.add("identity_update_input");

                                identity_private_id_input.addEventListener("focusout", function () {
                                    if (identity_private_id_input.value !== identity_private_id_span.innerHTML && identity_private_id_input.value !== "") {

                                        let data = {"public_id": null, "private_id": identity_private_id_input.value, "name": null};

                                        request_asynchronous('/api/identity?cause=private_id&admin_id=' + admin_id, 'PUT',
                                            'application/json; charset=UTF-8', data, function (req, err, response) {
                                                if (err === "success") {
                                                    let response_data = JSON.parse(response.responseText);
                                                    if (response_data["status"] === "OK") {
                                                        swal(translate_text_item("Device Private ID is now:") + "\n" + translate_text_item(identity_private_id_input.value), "", "success");
                                                        identity_private_id_span.innerHTML = identity_private_id_input.value;
                                                    } else if (response_data["status"] === "ERROR") {
                                                        swal(translate_text_item("Device Private ID changing failed!"), "", "error");
                                                    }
                                                }
                                            });
                                    }
                                    identity_private_id_div.removeChild(identity_private_id_input);
                                    identity_private_id_div.appendChild(identity_private_id_span);
                                });
                                identity_private_id_div.appendChild(identity_private_id_input);
                                identity_private_id_input.focus();
                            });
                        }
                    }
                }
            });
    } else {
        identity_public_id_span.innerHTML = "";
        identity_name_span.innerHTML = "";
        identity_private_id_span.innerHTML = "";

        dark_deep_background_div.removeEventListener("click", identity_control_btn_lis_bind);
        options_template_container.removeEventListener("click", identity_control_btn_lis_bind);

        setSwiperSwiping(true);

        identity_control_btn_click_count = 0;
    }
});

let live_streaming_interacts = [];
let live_streaming_btn_click_count = 0;
let live_streaming_btn_lis_bind = close_opened_option.bind(null, live_streaming_btn);

live_streaming_btn.addEventListener("click", function () {

    dark_overlay_active = !dark_deep_background_div.classList.contains("focused");
    dark_deep_background_div.classList.toggle("focused");

    toggle_elements([update_control_div, wifi_control_div, audio_control_div, face_encoding_div, record_control_div, identity_control_div, r_sync_div, advanced_switch_div, lang_select_div, help_control_div, switching_control_div]);
    live_streaming_div.classList.toggle("col");
    live_streaming_div.classList.toggle("focused");
    live_streaming_div.classList.toggle("higher");
    live_streaming_io_div.classList.toggle("focused");

    live_streaming_btn_click_count++;
    if (live_streaming_btn_click_count <= 1) {
        dark_deep_background_div.addEventListener("click", live_streaming_btn_lis_bind);
        options_template_container.addEventListener("click", live_streaming_btn_lis_bind);

        setSwiperSwiping(false);

        request_asynchronous('/api/live_stream?admin_id=' + admin_id, 'GET',
            'application/x-www-form-urlencoded; charset=UTF-8', null, function (requested_data, err) {
                if (err === "success") {
                    if (requested_data["status"] === "OK") {

                        let websites = requested_data["data"];

                        for (let c = 0; c < websites.length; c++) {

                            let website_dropdown_div = document.createElement('div');
                            let website_btn = document.createElement('button');
                            let website_dd_btn = document.createElement('button');
                            let website_dd_span = document.createElement('span');
                            let website_dropdown_container_div = document.createElement('div');

                            let website_context_menu = document.createElement('div');
                            let website_cm_remove_a = document.createElement('a');
                            let website_cm_rename_a = document.createElement('a');
                            let website_cm_add_account_a = document.createElement('a');

                            website_dropdown_div.classList.add("dropdown", "mb-1", "website_div");
                            website_dropdown_div.id = "website_div_" + c;

                            website_context_menu.classList.add("position-relative", "dropdown-menu", "dropdown-menu-sm", "website_context_menu");
                            website_context_menu.id = websites[c]["name"] + "_context_menu";

                            $("#" + website_context_menu.id + " a").on("click", function () {
                                $(this).parent().removeClass("show").hide();
                            });

                            website_cm_remove_a.classList.add("dropdown-item");
                            website_cm_remove_a.innerHTML = translate_text_item("remove");

                            website_cm_remove_a.addEventListener("click", function () {

                                request_asynchronous('/api/live_stream?id=' + websites[c]["id"] + '&admin_id=' + admin_id + '&root=True', 'DELETE',
                                    'application/x-www-form-urlencoded; charset=UTF-8', null, function (req, err, response) {
                                        if (err === "success") {
                                            let response_data = JSON.parse(response.responseText);
                                        }
                                    });
                            });

                            website_cm_rename_a.classList.add("dropdown-item");
                            website_cm_rename_a.innerHTML = translate_text_item("rename");

                            website_cm_rename_a.addEventListener("click", function () {

                                website_dropdown_div.removeChild(website_btn);
                                website_dropdown_div.removeChild(website_dropdown_container_div);

                                let website_name_input = document.createElement('input');

                                website_name_input.type = "text";
                                website_name_input.placeholder = website_btn.innerHTML;
                                website_name_input.classList.add("action_name_input");

                                website_name_input.addEventListener("focusout", function () {
                                    if (website_name_input.value !== website_btn.innerHTML && website_name_input.value !== "") {
                                        let data = {"name": website_name_input.value, "url": websites[c]["url"], "server": websites[c]["server"]};

                                        request_asynchronous('/api/live_stream?id=' + websites[c]["id"] + '&admin_id=' + admin_id + '&root=True', 'PUT',
                                            'application/x-www-form-urlencoded; charset=UTF-8', data, function (req, err, response) {
                                                if (err === "success") {
                                                    let response_data = JSON.parse(response.responseText);
                                                }
                                            });
                                        website_btn.innerHTML = website_name_input.value
                                    }
                                    website_dropdown_div.removeChild(website_name_input);
                                    website_dropdown_div.appendChild(website_btn);
                                    website_dropdown_div.appendChild(website_dropdown_container_div);

                                });
                                website_dropdown_div.appendChild(website_name_input);
                                website_name_input.focus();
                            });

                            website_cm_add_account_a.classList.add("dropdown-item");
                            website_cm_add_account_a.innerHTML = translate_text_item("add account");

                            website_cm_add_account_a.addEventListener("click", function () {
                                stream_id_creation_div.classList.add("focused");
                                stream_id_creation_div.setAttribute("website_id", websites[c]["id"]);
                                stream_cre_create_btn.disabled = true;
                            });

                            website_btn.classList.add("btn", "btn-secondary", "website_btn");
                            website_btn.type = "button";
                            website_btn.id = websites[c]["name"] + c + "_btn";
                            website_btn.innerHTML = websites[c]["name"];

                            function hide_website_context_menu() {
                                $("#" + website_context_menu.id).removeClass("show").hide();
                                document.removeEventListener("click", hide_website_context_menu);
                            }

                            let website_interact = interact('#' + website_btn.id)
                                .on('tap', function (event) {

                                    if (!website_context_menu.classList.contains("show")) {
                                    }
                                })
                                .on('doubletap', function (event) {
                                })
                                .on('hold', function (event) {
                                    website_btn.classList.add("disable_pointer");
                                    let target = event.target;
                                    let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                                    let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                                    website_context_menu.setAttribute('data-x', x);
                                    website_context_menu.setAttribute('data-y', y);

                                    $("#" + website_context_menu.id).css({
                                        display: "block",
                                        transform: 'translate(' + x + 'px, ' + y - 50 + 'px)',
                                    }).addClass("show");

                                    document.addEventListener("click", hide_website_context_menu);

                                    setTimeout(function () {
                                        website_btn.classList.remove("disable_pointer");
                                    }, 500);

                                    return false; //blocks default WebBrowser right click menu
                                })
                                .on('down', function (event) {
                                })
                                .on('up', function (event) {
                                });

                            live_streaming_interacts.push(website_interact);

                            website_dd_btn.classList.add("btn", "btn-secondary", "dropdown-toggle", "dropdown-toggle-split");
                            website_dd_btn.type = "button";
                            website_dd_btn.setAttribute("data-toggle", "dropdown");
                            website_dd_btn.setAttribute("aria-haspopup", "true");
                            website_dd_btn.setAttribute("aria-expanded", "false");

                            let website_dd_btn_click_count = 0;
                            website_dd_btn.addEventListener("click", function () {
                                website_dd_btn_click_count++;
                                if (website_dd_btn_click_count <= 1) {
                                    website_dropdown_container_div.classList.add("show");

                                    clearElement(website_dropdown_container_div);

                                    if (websites[c]["stream_ids"].length === 0) {
                                        let no_stream_id_span = document.createElement('span');

                                        no_stream_id_span.classList.add("no_stream_id_span");
                                        no_stream_id_span.innerHTML = translate_text_item("No Stream ID");
                                        website_dropdown_container_div.appendChild(no_stream_id_span);
                                    }

                                    for (let i = 0; i < websites[c]["stream_ids"].length; i++) {
                                        let stream_id_dropdown_div = document.createElement('div');
                                        let stream_id_btn = document.createElement('button');
                                        let stream_id_dd_btn = document.createElement('button');
                                        let stream_id_dd_span = document.createElement('span');
                                        let stream_id_dropdown_container_div = document.createElement('div');
                                        let stream_key_div = document.createElement('div');
                                        let stream_key_title_a = document.createElement('a');
                                        let stream_key_span = document.createElement('span');

                                        let stream_context_menu = document.createElement('div');
                                        let stream_cm_remove_a = document.createElement('a');
                                        let stream_cm_rename_a = document.createElement('a');
                                        let stream_cm_change_key_a = document.createElement('a');

                                        stream_id_dropdown_div.classList.add("position-relative", "dropdown-item", "form-check-label", "dropdown");
                                        stream_id_dropdown_div.id = "live_stream_id_dd_div_" + c + "_" + i;

                                        stream_context_menu.classList.add("position-relative", "dropdown-menu", "dropdown-menu-sm", "stream_context_menu");
                                        stream_context_menu.id = websites[c]["name"] + websites[c]["stream_ids"][i]["account_name"] + "_context_menu";

                                        $("#" + stream_context_menu.id + " a").on("click", function () {
                                            $(this).parent().removeClass("show").hide();
                                        });

                                        stream_cm_remove_a.classList.add("dropdown-item");
                                        stream_cm_remove_a.innerHTML = translate_text_item("remove");

                                        stream_cm_remove_a.addEventListener("click", function () {

                                            request_asynchronous('/api/live_stream?id=' + websites[c]["id"] + '&account_name=' + websites[c]["stream_ids"][i]["account_name"] + '&admin_id=' + admin_id, 'DELETE',
                                                'application/x-www-form-urlencoded; charset=UTF-8', null, function (req, err, response) {
                                                    if (err === "success") {
                                                        let response_data = JSON.parse(response.responseText);
                                                    }
                                                });
                                        });

                                        stream_cm_rename_a.classList.add("dropdown-item");
                                        stream_cm_rename_a.innerHTML = translate_text_item("rename");

                                        stream_cm_rename_a.addEventListener("click", function () {

                                            stream_id_dropdown_div.removeChild(stream_id_btn);
                                            stream_id_dropdown_div.removeChild(stream_id_dd_btn);
                                            stream_id_dropdown_div.removeChild(stream_id_dropdown_container_div);
                                            stream_id_dropdown_div.removeChild(stream_context_menu);

                                            let stream_id_name_input = document.createElement('input');

                                            stream_id_name_input.type = "text";
                                            stream_id_name_input.placeholder = stream_id_btn.innerHTML;
                                            stream_id_name_input.classList.add("action_name_input");

                                            stream_id_name_input.addEventListener("focusout", function () {
                                                if (stream_id_name_input.value !== stream_id_btn.innerHTML && stream_id_name_input.value !== "") {
                                                    let data = {"account_name": stream_id_name_input.value, "key": websites[c]["stream_ids"][i]["key"]};

                                                    request_asynchronous('/api/live_stream?id=' + websites[c]["id"] + '&account_name=' + websites[c]["stream_ids"][i]["account_name"] + '&admin_id=' + admin_id, 'PUT',
                                                        'application/x-www-form-urlencoded; charset=UTF-8', data, function (req, err, response) {
                                                            if (err === "success") {
                                                                let response_data = JSON.parse(response.responseText);
                                                            }
                                                        });
                                                    stream_id_btn.innerHTML = stream_id_name_input.value
                                                }
                                                stream_id_dropdown_div.removeChild(stream_id_name_input);
                                                stream_id_dropdown_div.appendChild(stream_id_btn);
                                                stream_id_dropdown_div.appendChild(stream_id_dd_btn);
                                                stream_id_dropdown_div.appendChild(stream_id_dropdown_container_div);
                                                stream_id_dropdown_div.appendChild(stream_context_menu);
                                            });
                                            stream_id_dropdown_div.appendChild(stream_id_name_input);
                                            stream_id_name_input.focus();
                                        });

                                        stream_cm_change_key_a.classList.add("dropdown-item");
                                        stream_cm_change_key_a.innerHTML = translate_text_item("change key");

                                        stream_cm_change_key_a.addEventListener("click", function () {
                                            stream_id_dropdown_container_div.classList.add("show");

                                            stream_key_div.removeChild(stream_key_title_a);
                                            stream_key_div.removeChild(stream_key_span);

                                            let stream_id_key_input = document.createElement('input');

                                            stream_id_key_input.type = "text";
                                            stream_id_key_input.placeholder = stream_key_span.innerHTML;
                                            stream_id_key_input.classList.add("action_name_input");

                                            stream_id_key_input.addEventListener("focusout", function () {
                                                if (stream_id_key_input.value !== stream_key_span.innerHTML && stream_id_key_input.value !== "") {
                                                    let data = {"account_name": stream_id_key_input.value, "key": websites[c]["stream_ids"][i]["key"]};

                                                    request_asynchronous('/api/live_stream?id=' + websites[c]["id"] + '&account_name=' + websites[c]["stream_ids"][i]["account_name"] + '&admin_id=' + admin_id, 'PUT',
                                                        'application/x-www-form-urlencoded; charset=UTF-8', data, function (req, err, response) {
                                                            if (err === "success") {
                                                                let response_data = JSON.parse(response.responseText);
                                                            }
                                                        });
                                                    stream_key_span.innerHTML = stream_id_key_input.value
                                                }
                                                stream_key_div.removeChild(stream_id_key_input);
                                                stream_key_div.appendChild(stream_key_title_a);
                                                stream_key_div.appendChild(stream_key_span);

                                                stream_id_dropdown_container_div.classList.remove("show");
                                            });
                                            stream_key_div.appendChild(stream_id_key_input);
                                            stream_id_key_input.focus();
                                        });

                                        stream_id_btn.classList.add("btn", "btn-dark");
                                        stream_id_btn.type = "button";
                                        stream_id_btn.id = websites[c]["name"] + websites[c]["stream_ids"][i]["account_name"] + "_btn";
                                        stream_id_btn.innerHTML = websites[c]["stream_ids"][i]["account_name"].replace(/_/gi, " ");
                                        stream_id_btn.setAttribute("is_active", websites[c]["stream_ids"][i]["is_active"]);


                                        stream_id_btn.addEventListener("click", function () {
                                            if (!stream_id_btn.classList.contains("btn-outline-dark")) {
                                                request_asynchronous('/api/live_stream?cause=stream_id&in_use=' + stream_id_btn.getAttribute("is_active") + '&id=' + websites[c]["id"] + '&account_name=' + websites[c]["stream_ids"][i]["account_name"] + '&admin_id=' + admin_id, 'PATCH',
                                                    'application/x-www-form-urlencoded; charset=UTF-8', {}, function (req, err, response) {
                                                        if (err === "success") {
                                                            let response_data = JSON.parse(response.responseText);
                                                        }
                                                    });

                                                live_streaming_btn.click();
                                                live_streaming_btn.click();
                                                website_dd_btn.click();
                                            }
                                        });

                                        function hide_stream_context_menu() {
                                            $("#" + stream_context_menu.id).removeClass("show").hide();
                                            document.removeEventListener("click", hide_stream_context_menu);
                                        }

                                        let stream_id_interact = interact('#' + stream_id_btn.id)
                                            .on('tap', function (event) {

                                                if (!stream_context_menu.classList.contains("show")) {
                                                }
                                            })
                                            .on('doubletap', function (event) {
                                            })
                                            .on('hold', function (event) {
                                                stream_id_btn.classList.add("disable_pointer");

                                                let target = event.target;
                                                let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                                                let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                                                stream_context_menu.setAttribute('data-x', x);
                                                stream_context_menu.setAttribute('data-y', y);

                                                $("#" + stream_context_menu.id).css({
                                                    display: "block",
                                                    transform: 'translate(' + x + 'px, ' + y + 'px)',
                                                }).addClass("show");

                                                setTimeout(function () {
                                                    stream_id_btn.classList.remove("disable_pointer");
                                                    document.addEventListener("click", hide_stream_context_menu);
                                                }, 500);

                                                return false; //blocks default WebBrowser right click menu
                                            })
                                            .on('down', function (event) {
                                            })
                                            .on('up', function (event) {
                                            });

                                        live_streaming_interacts.push(stream_id_interact);

                                        stream_id_dd_btn.classList.add("btn", "btn-dark", "dropdown-toggle", "dropdown-toggle-split");
                                        stream_id_dd_btn.type = "button";
                                        stream_id_dd_btn.setAttribute("data-toggle", "dropdown");
                                        stream_id_dd_btn.setAttribute("aria-haspopup", "true");
                                        stream_id_dd_btn.setAttribute("aria-expanded", "false");

                                        let stream_id_dd_btn_click_count = 0;
                                        stream_id_dd_btn.addEventListener("click", function () {

                                            stream_id_dropdown_container_div.classList.toggle("show");

                                            stream_id_dd_btn_click_count++;
                                            if (stream_id_dd_btn_click_count <= 1) {
                                                stream_id_dropdown_container_div.classList.add("show");
                                            } else {
                                                // stream_id_dropdown_container_div.classList.remove("show");
                                                stream_id_dd_btn_click_count = 0;
                                            }
                                        });

                                        if (websites[c]["stream_ids"][i]["is_active"]) {
                                            stream_id_btn.classList.remove("btn-dark");
                                            stream_id_btn.classList.add("btn-outline-dark");
                                            stream_id_dd_btn.classList.remove("btn-dark");
                                            stream_id_dd_btn.classList.add("btn-outline-dark");
                                        }

                                        stream_id_dd_span.classList.add("sr-only");

                                        stream_id_dropdown_container_div.classList.add("dropdown-menu", "dropdown-menu-right", "container", "dropdown_menu", "stream_id_dropdown_menu", "keep-open");
                                        stream_id_dropdown_container_div.id = websites[c]["name"] + websites[c]["stream_ids"][i]["account_name"] + "_container_div";

                                        stream_key_div.classList.add("stream_key_div");
                                        stream_key_div.classList.add("cut-text");

                                        stream_key_title_a.innerHTML = translate_text_item("stream key: ");

                                        stream_key_span.innerHTML = websites[c]["stream_ids"][i]["key"];

                                        stream_context_menu.appendChild(stream_cm_remove_a);
                                        stream_context_menu.appendChild(stream_cm_rename_a);
                                        stream_context_menu.appendChild(stream_cm_change_key_a);

                                        stream_id_dd_btn.appendChild(stream_id_dd_span);

                                        stream_key_div.appendChild(stream_key_title_a);
                                        stream_key_div.appendChild(stream_key_span);

                                        stream_id_dropdown_container_div.appendChild(stream_key_div);

                                        stream_id_dropdown_div.appendChild(stream_id_btn);
                                        stream_id_dropdown_div.appendChild(stream_id_dd_btn);
                                        stream_id_dropdown_div.appendChild(stream_id_dropdown_container_div);
                                        stream_id_dropdown_div.appendChild(stream_context_menu);

                                        website_dropdown_container_div.appendChild(stream_id_dropdown_div);
                                    }
                                } else {
                                    website_dd_btn_click_count = 0;
                                    for (let i = 0; i < live_streaming_interacts.length; i++) {
                                        live_streaming_interacts[i].unset();
                                    }
                                    live_streaming_interacts = [];
                                    website_dropdown_container_div.classList.remove("show");
                                }
                            });

                            website_dd_span.classList.add("sr-only");

                            website_dropdown_container_div.classList.add("dropdown-menu", "dropdown-menu-right", "dropdown_menu", "website_dropdown_menu");
                            website_dropdown_container_div.setAttribute("aria-labelledby", website_btn.id);

                            if (admin_id !== false) {
                                website_context_menu.appendChild(website_cm_remove_a);
                                website_context_menu.appendChild(website_cm_rename_a);
                            }
                            website_context_menu.appendChild(website_cm_add_account_a);

                            website_dd_btn.appendChild(website_dd_span);

                            website_dropdown_div.appendChild(website_btn);
                            website_dropdown_div.appendChild(website_dd_btn);
                            website_dropdown_div.appendChild(website_dropdown_container_div);
                            website_dropdown_div.appendChild(website_context_menu);

                            ls_websites_ul.appendChild(website_dropdown_div);
                        }
                    }
                }
            });

    } else {
        dark_deep_background_div.removeEventListener("click", live_streaming_btn_lis_bind);
        options_template_container.removeEventListener("click", live_streaming_btn_lis_bind);

        clearElement(ls_websites_ul);

        setSwiperSwiping(true);

        live_streaming_btn_click_count = 0;
    }
});

website_creation_div.addEventListener("click", function () {
    web_cre_create_btn.disabled = website_name_input.value === "" || website_url_input.value === "" || website_server_input.value === "";
});

web_cre_create_btn.addEventListener("click", function () {
    if (website_name_input.value !== "" && website_url_input.value !== "" && website_server_input.value !== "") {

        let data = {"name": website_name_input.value.replace(/ /gi, "_"), "url": website_url_input.value, "server": website_server_input.value};

        request_asynchronous('/api/live_stream?admin_id=' + admin_id + '&root=true', 'POST',
            'application/json; charset=UTF-8', data, function (req, err, response) {
                if (err === "success") {
                    let response_data = JSON.parse(response.responseText);

                    website_name_input.value = website_url_input.value = website_server_input.value = "";

                    swal(translate_text_item("Website Added!"), "", "success");

                    website_creation_div.classList.remove("focused");
                    live_streaming_btn.click();
                    live_streaming_btn.click();
                }
            });
    }
});

web_cre_cancel_btn.addEventListener("click", function () {
    website_name_input.value = "";
    website_url_input.value = "";
    website_server_input.value = "";

    website_creation_div.classList.remove("focused");

});

create_website_btn.addEventListener("click", function () {
    website_creation_div.classList.add("focused");
    web_cre_create_btn.disabled = true;
});

stream_id_creation_div.addEventListener("click", function () {
    stream_cre_create_btn.disabled = stream_acc_name_input.value === "" || stream_acc_key_input.value === "";
});

stream_cre_create_btn.addEventListener("click", function (event) {
    if (stream_acc_name_input.value !== "" && stream_acc_key_input.value !== "") {

        let data = {"account_name": stream_acc_name_input.value.replace(/ /gi, "_"), "key": stream_acc_key_input.value};

        request_asynchronous('/api/live_stream?id=' + stream_id_creation_div.getAttribute("website_id") + '&admin_id=' + admin_id + '&root=true', 'POST',
            'application/json; charset=UTF-8', data, function (req, err, response) {
                if (err === "success") {
                    let response_data = JSON.parse(response.responseText);

                    stream_acc_name_input.value = stream_acc_key_input.value = "";

                    swal(translate_text_item("Account Added!"), "", "success");

                    stream_id_creation_div.classList.remove("focused");
                    live_streaming_btn.click();
                    live_streaming_btn.click();
                }
            });
    }
});

stream_cre_cancel_btn.addEventListener("click", function () {
    stream_acc_name_input.value = "";
    stream_acc_key_input.value = "";

    stream_id_creation_div.classList.remove("focused");

});

let r_sync_interacts = [];
let r_sync_btn_click_count = 0;
let r_sync_btn_lis_bind = close_opened_option.bind(null, r_sync_btn);

r_sync_btn.addEventListener("click", function () {

    dark_overlay_active = !dark_deep_background_div.classList.contains("focused");
    dark_deep_background_div.classList.toggle("focused");

    toggle_elements([update_control_div, wifi_control_div, audio_control_div, face_encoding_div, record_control_div, identity_control_div, live_streaming_div, advanced_switch_div, lang_select_div, help_control_div, switching_control_div]);
    r_sync_div.classList.toggle("col");
    r_sync_div.classList.toggle("focused");
    r_sync_div.classList.toggle("higher");
    r_sync_io_div.classList.toggle("focused");

    r_sync_btn_click_count++;
    if (r_sync_btn_click_count <= 1) {
        dark_deep_background_div.addEventListener("click", r_sync_btn_lis_bind);
        options_template_container.addEventListener("click", r_sync_btn_lis_bind);

        setSwiperSwiping(false);

        request_asynchronous('/api/r_sync?cause=auto_sync&admin_id=' + admin_id, 'GET',
            'application/x-www-form-urlencoded; charset=UTF-8', null, function (requested_data, err) {
                if (err === "success") {
                    if (requested_data["status"] === "OK") {
                        if (requested_data["data"] && !auto_r_sync_switch_checkbox.checked) {
                            $("#auto_r_sync_switch_checkbox").bootstrapToggle("toggle");
                        } else if (!requested_data["data"] && auto_r_sync_switch_checkbox.checked) {
                            $("#auto_r_sync_switch_checkbox").bootstrapToggle("toggle");
                        }
                    }
                }
            });

        request_asynchronous('/api/r_sync?admin_id=' + admin_id, 'GET',
            'application/x-www-form-urlencoded; charset=UTF-8', null, function (requested_data, err) {
                // err = "success";
                // requested_data = {"status": "OK", "data": true};
                if (err === "success") {
                    if (requested_data["status"] === "OK") {
                        let services = requested_data["data"];

                        for (let c = 0; c < services.length; c++) {

                            // Service Selection Window Creation.
                            let service_select_div = document.createElement('div');
                            let service_select_checkbox = document.createElement('input');
                            let service_select_label = document.createElement('label');

                            service_select_div.classList.add("form-check", "mb-1");

                            service_select_checkbox.classList.add("form-check-input");
                            service_select_checkbox.id = services[c]["name"] + "_checkbox" + c;
                            service_select_checkbox.type = "checkbox";
                            service_select_checkbox.name = "service_select";
                            service_select_checkbox.checked = services[c]["to_be_used"];


                            service_select_checkbox.addEventListener("change", function () {
                                request_asynchronous('/api/r_sync?cause=service&in_use=' + service_select_checkbox.checked + '&name=' + services[c]["name"] + '&admin_id=' + admin_id, 'PATCH',
                                    'application/x-www-form-urlencoded; charset=UTF-8', {}, function (req, err, response) {
                                        if (err === "success") {
                                            let response_data = JSON.parse(response.responseText);

                                            r_sync_btn.click();
                                            r_sync_btn.click();
                                        }
                                    });
                            });

                            service_select_label.classList.add("form-check-label", "btn", "btn-outline-dark");
                            service_select_label.setAttribute("for", service_select_checkbox.id);
                            service_select_label.innerHTML = services[c]["name"].replace(/_/gi, " ");

                            service_select_div.appendChild(service_select_checkbox);
                            service_select_div.appendChild(service_select_label);

                            service_list_ul.appendChild(service_select_div);

                            // Service Editing Window Creation.
                            if (services[c]["to_be_used"]) {

                                let service_dropdown_div = document.createElement('div');
                                let service_btn = document.createElement('button');
                                let service_dd_btn = document.createElement('button');
                                let service_dd_span = document.createElement('span');
                                let service_dropdown_container_div = document.createElement('div');

                                let service_context_menu = document.createElement('div');
                                let service_cm_add_account_a = document.createElement('a');

                                service_dropdown_div.classList.add("dropdown", "mb-1", "service_div");
                                service_dropdown_div.id = "website_div_" + c;

                                service_context_menu.classList.add("position-relative", "dropdown-menu", "dropdown-menu-sm", "service_context_menu");
                                service_context_menu.id = services[c]["name"] + "_context_menu";

                                $("#" + service_context_menu.id + " a").on("click", function () {
                                    $(this).parent().removeClass("show").hide();
                                });

                                service_cm_add_account_a.classList.add("dropdown-item");
                                service_cm_add_account_a.innerHTML = translate_text_item("add account");

                                service_cm_add_account_a.addEventListener("click", function () {
                                    r_sync_account_creation_div.classList.add("focused");
                                    r_sync_account_creation_div.setAttribute("service_name", services[c]["name"]);
                                    r_sync_account_cre_create_btn.disabled = true;
                                });

                                service_btn.classList.add("btn", "btn-secondary", "service_btn");
                                service_btn.type = "button";
                                service_btn.id = services[c]["name"] + c + "_btn";
                                service_btn.innerHTML = services[c]["name"];

                                function hide_service_context_menu() {
                                    $("#" + service_context_menu.id).removeClass("show").hide();
                                    document.removeEventListener("click", hide_service_context_menu);
                                }

                                let service_interact = interact('#' + service_btn.id)
                                    .on('tap', function (event) {

                                        if (!service_context_menu.classList.contains("show")) {
                                        }
                                    })
                                    .on('doubletap', function (event) {
                                    })
                                    .on('hold', function (event) {
                                        service_btn.classList.add("disable_pointer");
                                        let target = event.target;
                                        let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                                        let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                                        service_context_menu.setAttribute('data-x', x);
                                        service_context_menu.setAttribute('data-y', y);

                                        $("#" + service_context_menu.id).css({
                                            display: "block",
                                            transform: 'translate(' + x + 'px, ' + y - 50 + 'px)',
                                        }).addClass("show");

                                        document.addEventListener("click", hide_service_context_menu);

                                        setTimeout(function () {
                                            service_btn.classList.remove("disable_pointer");
                                        }, 500);

                                        return false; //blocks default WebBrowser right click menu
                                    })
                                    .on('down', function (event) {
                                    })
                                    .on('up', function (event) {
                                    });

                                r_sync_interacts.push(service_interact);

                                service_dd_btn.classList.add("btn", "btn-secondary", "dropdown-toggle", "dropdown-toggle-split");
                                service_dd_btn.type = "button";
                                service_dd_btn.setAttribute("data-toggle", "dropdown");
                                service_dd_btn.setAttribute("aria-haspopup", "true");
                                service_dd_btn.setAttribute("aria-expanded", "false");

                                let service_dd_btn_click_count = 0;
                                service_dd_btn.addEventListener("click", function () {
                                    service_dd_btn_click_count++;
                                    if (service_dd_btn_click_count <= 1) {
                                        service_dropdown_container_div.classList.add("show");

                                        clearElement(service_dropdown_container_div);

                                        if (services[c]["accounts"].length === 0) {
                                            let no_account_span = document.createElement('span');

                                            no_account_span.classList.add("no_account_span");
                                            no_account_span.innerHTML = translate_text_item("No Account");
                                            service_dropdown_container_div.appendChild(no_account_span);
                                        }

                                        for (let i = 0; i < services[c]["accounts"].length; i++) {
                                            let account_dropdown_div = document.createElement('div');
                                            let account_btn = document.createElement('button');
                                            let account_dd_btn = document.createElement('button');
                                            let account_dd_span = document.createElement('span');
                                            let account_dropdown_container_div = document.createElement('div');
                                            let access_key_div = document.createElement('div');
                                            let access_key_title_a = document.createElement('a');
                                            let access_key_span = document.createElement('span');

                                            let account_context_menu = document.createElement('div');
                                            let account_cm_remove_a = document.createElement('a');
                                            let account_cm_rename_a = document.createElement('a');
                                            let account_cm_change_key_a = document.createElement('a');

                                            account_dropdown_div.classList.add("position-relative", "dropdown-item", "form-check-label", "dropdown");
                                            account_dropdown_div.id = "r_sync_account_dd_div_" + c + "_" + i;

                                            account_context_menu.classList.add("position-relative", "dropdown-menu", "dropdown-menu-sm", "stream_context_menu");
                                            account_context_menu.id = "r_sync_account_context_menu_" + c + "_" + i;

                                            $("#" + account_context_menu.id + " a").on("click", function () {
                                                $(this).parent().removeClass("show").hide();
                                            });

                                            account_cm_remove_a.classList.add("dropdown-item");
                                            account_cm_remove_a.innerHTML = translate_text_item("remove");

                                            account_cm_remove_a.addEventListener("click", function () {

                                                request_asynchronous('/api/r_sync?name=' + services[c]["name"] + '&account_name=' + services[c]["accounts"][i]["name"] + '&admin_id=' + admin_id, 'DELETE',
                                                    'application/x-www-form-urlencoded; charset=UTF-8', null, function (req, err, response) {
                                                        if (err === "success") {
                                                            let response_data = JSON.parse(response.responseText);
                                                        }
                                                    });
                                            });

                                            account_cm_rename_a.classList.add("dropdown-item");
                                            account_cm_rename_a.innerHTML = translate_text_item("rename");

                                            account_cm_rename_a.addEventListener("click", function () {

                                                account_dropdown_div.removeChild(account_btn);
                                                account_dropdown_div.removeChild(account_dd_btn);
                                                account_dropdown_div.removeChild(account_dropdown_container_div);
                                                account_dropdown_div.removeChild(account_context_menu);

                                                let stream_id_name_input = document.createElement('input');

                                                stream_id_name_input.type = "text";
                                                stream_id_name_input.placeholder = account_btn.innerHTML;
                                                stream_id_name_input.classList.add("action_name_input");

                                                stream_id_name_input.addEventListener("focusout", function () {
                                                    if (stream_id_name_input.value !== account_btn.innerHTML && stream_id_name_input.value !== "") {
                                                        let data = {"account_name": stream_id_name_input.value, "key": services[c]["accounts"][i]["key"]};

                                                        request_asynchronous('/api/r_sync?name=' + services[c]["name"] + '&account_name=' + services[c]["accounts"][i]["name"] + '&admin_id=' + admin_id, 'PUT',
                                                            'application/x-www-form-urlencoded; charset=UTF-8', data, function (req, err, response) {
                                                                if (err === "success") {
                                                                    let response_data = JSON.parse(response.responseText);
                                                                }
                                                            });
                                                        account_btn.innerHTML = stream_id_name_input.value
                                                    }
                                                    account_dropdown_div.removeChild(stream_id_name_input);
                                                    account_dropdown_div.appendChild(account_btn);
                                                    account_dropdown_div.appendChild(account_dd_btn);
                                                    account_dropdown_div.appendChild(account_dropdown_container_div);
                                                    account_dropdown_div.appendChild(account_context_menu);
                                                });
                                                account_dropdown_div.appendChild(stream_id_name_input);
                                                stream_id_name_input.focus();
                                            });

                                            account_cm_change_key_a.classList.add("dropdown-item");
                                            account_cm_change_key_a.innerHTML = translate_text_item("change key");

                                            account_cm_change_key_a.addEventListener("click", function () {
                                                account_dropdown_container_div.classList.add("show");

                                                access_key_div.removeChild(access_key_title_a);
                                                access_key_div.removeChild(access_key_span);

                                                let account_key_input = document.createElement('input');

                                                account_key_input.type = "text";
                                                account_key_input.placeholder = access_key_span.innerHTML;
                                                account_key_input.classList.add("action_name_input");

                                                account_key_input.addEventListener("focusout", function () {
                                                    if (account_key_input.value !== access_key_span.innerHTML && account_key_input.value !== "") {
                                                        let data = {"account_name": account_key_input.value, "key": services[c]["accounts"][i]["key"]};

                                                        request_asynchronous('/api/r_sync?name=' + services[c]["name"] + '&account_name=' + services[c]["accounts"][i]["name"] + '&admin_id=' + admin_id, 'PUT',
                                                            'application/x-www-form-urlencoded; charset=UTF-8', data, function (req, err, response) {
                                                                if (err === "success") {
                                                                    let response_data = JSON.parse(response.responseText);
                                                                }
                                                            });
                                                        access_key_span.innerHTML = account_key_input.value
                                                    }
                                                    access_key_div.removeChild(account_key_input);
                                                    access_key_div.appendChild(access_key_title_a);
                                                    access_key_div.appendChild(access_key_span);

                                                    account_dropdown_container_div.classList.remove("show");
                                                });
                                                access_key_div.appendChild(account_key_input);
                                                account_key_input.focus();
                                            });

                                            account_btn.classList.add("btn", "btn-dark");
                                            account_btn.type = "button";
                                            account_btn.id = services[c]["name"] + services[c]["accounts"][i]["name"] + "_btn";
                                            account_btn.innerHTML = services[c]["accounts"][i]["name"].replace(/_/gi, " ");
                                            account_btn.setAttribute("is_active", services[c]["accounts"][i]["is_active"]);

                                            account_btn.addEventListener("click", function () {
                                                if (!account_btn.classList.contains("btn-outline-dark")) {
                                                    request_asynchronous('/api/r_sync?cause=account&in_use=' + account_btn.getAttribute("is_active") + '&name=' + services[c]["name"] + '&account_name=' + services[c]["accounts"][i]["name"] + '&admin_id=' + admin_id, 'PATCH',
                                                        'application/x-www-form-urlencoded; charset=UTF-8', {}, function (req, err, response) {
                                                            if (err === "success") {
                                                                let response_data = JSON.parse(response.responseText);
                                                            }
                                                        });
                                                    r_sync_btn.click();
                                                    r_sync_btn.click();
                                                    service_dd_btn.click();
                                                }
                                            });

                                            if (account_btn.getAttribute("is_active")) {
                                                r_sync_sync_btn.disabled = false;
                                            }

                                            function hide_account_context_menu() {
                                                $("#" + account_context_menu.id).removeClass("show").hide();
                                                document.removeEventListener("click", hide_account_context_menu);
                                            }

                                            let account_interact = interact('#' + account_btn.id)
                                                .on('tap', function (event) {

                                                    if (!account_context_menu.classList.contains("show")) {
                                                    }
                                                })
                                                .on('doubletap', function (event) {
                                                })
                                                .on('hold', function (event) {
                                                    account_btn.classList.add("disable_pointer");

                                                    let target = event.target;
                                                    let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                                                    let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                                                    account_context_menu.setAttribute('data-x', x);
                                                    account_context_menu.setAttribute('data-y', y);

                                                    $("#" + account_context_menu.id).css({
                                                        display: "block",
                                                        transform: 'translate(' + x + 'px, ' + y + 'px)',
                                                    }).addClass("show");

                                                    setTimeout(function () {
                                                        account_btn.classList.remove("disable_pointer");
                                                        document.addEventListener("click", hide_account_context_menu);
                                                    }, 500);

                                                    return false; //blocks default WebBrowser right click menu
                                                })
                                                .on('down', function (event) {
                                                })
                                                .on('up', function (event) {
                                                });

                                            r_sync_interacts.push(account_interact);

                                            account_dd_btn.classList.add("btn", "btn-dark", "dropdown-toggle", "dropdown-toggle-split");
                                            account_dd_btn.type = "button";
                                            account_dd_btn.setAttribute("data-toggle", "dropdown");
                                            account_dd_btn.setAttribute("aria-haspopup", "true");
                                            account_dd_btn.setAttribute("aria-expanded", "false");

                                            let stream_id_dd_btn_click_count = 0;
                                            account_dd_btn.addEventListener("click", function () {

                                                account_dropdown_container_div.classList.toggle("show");

                                                stream_id_dd_btn_click_count++;
                                                if (stream_id_dd_btn_click_count <= 1) {
                                                    account_dropdown_container_div.classList.add("show");
                                                } else {
                                                    // stream_id_dropdown_container_div.classList.remove("show");
                                                    stream_id_dd_btn_click_count = 0;
                                                }
                                            });

                                            if (services[c]["accounts"][i]["is_active"]) {
                                                account_btn.classList.remove("btn-dark");
                                                account_btn.classList.add("btn-outline-dark");
                                                account_dd_btn.classList.remove("btn-dark");
                                                account_dd_btn.classList.add("btn-outline-dark");
                                            }

                                            account_dd_span.classList.add("sr-only");

                                            account_dropdown_container_div.classList.add("dropdown-menu", "dropdown-menu-right", "container", "dropdown_menu", "account_dropdown_menu", "keep-open");
                                            account_dropdown_container_div.id = services[c]["name"] + services[c]["accounts"][i]["name"] + "_container_div";

                                            access_key_div.classList.add("stream_key_div");
                                            access_key_div.classList.add("cut-text");

                                            access_key_title_a.innerHTML = translate_text_item("stream key: ");

                                            access_key_span.innerHTML = services[c]["accounts"][i]["key"];

                                            account_context_menu.appendChild(account_cm_remove_a);
                                            account_context_menu.appendChild(account_cm_rename_a);
                                            account_context_menu.appendChild(account_cm_change_key_a);

                                            account_dd_btn.appendChild(account_dd_span);

                                            access_key_div.appendChild(access_key_title_a);
                                            access_key_div.appendChild(access_key_span);

                                            account_dropdown_container_div.appendChild(access_key_div);

                                            account_dropdown_div.appendChild(account_btn);
                                            account_dropdown_div.appendChild(account_dd_btn);
                                            account_dropdown_div.appendChild(account_dropdown_container_div);
                                            account_dropdown_div.appendChild(account_context_menu);

                                            service_dropdown_container_div.appendChild(account_dropdown_div);
                                        }
                                    } else {
                                        service_dd_btn_click_count = 0;
                                        for (let i = 0; i < r_sync_interacts.length; i++) {
                                            r_sync_interacts[i].unset();
                                        }
                                        r_sync_interacts = [];
                                        service_dropdown_container_div.classList.remove("show");
                                    }
                                });

                                service_dd_span.classList.add("sr-only");

                                service_dropdown_container_div.classList.add("dropdown-menu", "dropdown-menu-right", "dropdown_menu", "service_dropdown_menu");
                                service_dropdown_container_div.setAttribute("aria-labelledby", service_btn.id);

                                service_context_menu.appendChild(service_cm_add_account_a);

                                service_dd_btn.appendChild(service_dd_span);

                                service_dropdown_div.appendChild(service_btn);
                                service_dropdown_div.appendChild(service_dd_btn);
                                service_dropdown_div.appendChild(service_dropdown_container_div);
                                service_dropdown_div.appendChild(service_context_menu);

                                r_sync_services_ul.appendChild(service_dropdown_div);
                            }
                        }
                        if (r_sync_services_ul.childElementCount === 0) {
                            r_sync_sync_btn.disabled = true;
                        }

                        request_asynchronous('/api/r_sync?cause=availability&admin_id=' + admin_id, 'GET',
                            'application/x-www-form-urlencoded; charset=UTF-8', null, function (requested_data, err) {
                                if (err === "success") {
                                    if (requested_data["status"] === "OK") {
                                        if (requested_data["data"]) {
                                            r_sync_sync_btn.disabled = false;
                                        } else {
                                            r_sync_sync_btn.disabled = true;
                                            swal(translate_text_item("The Cloud Storage Synchronization feature is not available because there is no internet access."), "", "warning");
                                        }
                                    }
                                }
                            });
                    }
                }
            });
    } else {
        dark_deep_background_div.removeEventListener("click", r_sync_btn_lis_bind);
        options_template_container.removeEventListener("click", r_sync_btn_lis_bind);

        clearElement(r_sync_services_ul);
        clearElement(service_list_ul);

        setSwiperSwiping(true);

        r_sync_btn_click_count = 0;
    }
});

r_sync_account_creation_div.addEventListener("click", function () {
    r_sync_account_cre_create_btn.disabled = r_sync_acc_name_input.value === "" || r_sync_acc_key_input.value === "";
});

r_sync_account_cre_create_btn.addEventListener("click", function (event) {
    if (r_sync_acc_name_input.value !== "" && r_sync_acc_key_input.value !== "") {

        let data = {"name": r_sync_acc_name_input.value.replace(/ /gi, "_"), "key": r_sync_acc_key_input.value};

        request_asynchronous('/api/r_sync?name=' + r_sync_account_creation_div.getAttribute("service_name") + '&admin_id=' + admin_id + '&root=true', 'POST',
            'application/json; charset=UTF-8', data, function (req, err, response) {
                if (err === "success") {
                    let response_data = JSON.parse(response.responseText);

                    r_sync_acc_name_input.value = r_sync_acc_key_input.value = "";

                    swal(translate_text_item("Account Added!"), "", "success");

                    r_sync_account_creation_div.classList.remove("focused");
                    r_sync_btn.click();
                    r_sync_btn.click();
                }
            });
    }
});

r_sync_account_cre_cancel_btn.addEventListener("click", function () {
    r_sync_acc_name_input.value = "";
    r_sync_acc_key_input.value = "";

    r_sync_account_creation_div.classList.remove("focused");
});

$('#auto_r_sync_switch_checkbox').change(function () {
    if (auto_r_sync_switch_checkbox.checked) { /* Active */
    } else {/* Inactive */
    }

    request_asynchronous('/api/r_sync?cause=auto_sync&in_use=' + auto_r_sync_switch_checkbox.checked + '&admin_id=' + admin_id, 'PATCH',
        'application/x-www-form-urlencoded; charset=UTF-8', {}, function (req, err, response) {
            if (err === "success") {
                let response_data = JSON.parse(response.responseText);
            }
        });
});

r_sync_sync_btn.addEventListener("click", function () {

    dark_deep_background_div.removeEventListener("click", r_sync_btn_lis_bind);
    options_template_container.removeEventListener("click", r_sync_btn_lis_bind);

    r_sync_div.classList.add("disable_pointer");

    r_sync_animation.classList.add("lds-hourglass");
    r_sync_animation_div.classList.add("focused");

    request_asynchronous('/api/r_sync?cause=sync&in_use=true' + '&admin_id=' + admin_id, 'PATCH',
        'application/x-www-form-urlencoded; charset=UTF-8', {}, function (req, err, response) {
            if (err === "success") {
                let response_data = JSON.parse(response.responseText);

                dark_deep_background_div.addEventListener("click", r_sync_btn_lis_bind);
                options_template_container.addEventListener("click", r_sync_btn_lis_bind);

                r_sync_div.classList.remove("disable_pointer");

                r_sync_animation.classList.remove("lds-hourglass");
                r_sync_animation_div.classList.remove("focused");
            }
        });
});

let advanced_switch_btn_click_count = 0;
let advanced_switch_btn_lis_bind = close_opened_option.bind(null, advanced_switch_btn);

advanced_switch_btn.addEventListener("click", function () {

    dark_overlay_active = !dark_deep_background_div.classList.contains("focused");
    dark_deep_background_div.classList.toggle("focused");

    toggle_elements([update_control_div, wifi_control_div, audio_control_div, face_encoding_div, record_control_div, identity_control_div, live_streaming_div, r_sync_div, lang_select_div, help_control_div, switching_control_div]);
    advanced_switch_div.classList.toggle("col");
    advanced_switch_div.classList.toggle("focused");
    advanced_switch_div.classList.toggle("higher");
    advanced_switch_io_div.classList.toggle("focused");

    advanced_switch_btn_click_count++;
    if (advanced_switch_btn_click_count <= 1) {
        dark_deep_background_div.addEventListener("click", advanced_switch_btn_lis_bind);
        options_template_container.addEventListener("click", advanced_switch_btn_lis_bind);

        setSwiperSwiping(false);
    } else {
        dark_deep_background_div.removeEventListener("click", advanced_switch_btn_lis_bind);
        options_template_container.removeEventListener("click", advanced_switch_btn_lis_bind);

        setSwiperSwiping(true);

        advanced_switch_btn_click_count = 0;
    }
});

advanced_activate_checkbox.addEventListener("change", function () {
    if (advanced_activate_checkbox.checked) {
        toggle_controlling_modal(true);
    } else {
        toggle_controlling_modal(false);
    }
});

let lang_select_btn_click_count = 0;
let lang_select_btn_lis_bind = close_opened_option.bind(null, lang_select_btn);

lang_select_btn.addEventListener("click", function () {

    dark_overlay_active = !dark_deep_background_div.classList.contains("focused");
    dark_deep_background_div.classList.toggle("focused");

    toggle_elements([update_control_div, wifi_control_div, audio_control_div, face_encoding_div, record_control_div, identity_control_div, live_streaming_div, r_sync_div, advanced_switch_div, help_control_div, switching_control_div]);
    lang_select_div.classList.toggle("col");
    lang_select_div.classList.toggle("focused");
    lang_select_div.classList.toggle("higher");
    lang_select_io_div.classList.toggle("focused");

    lang_select_btn_click_count++;
    if (lang_select_btn_click_count <= 1) {
        dark_deep_background_div.addEventListener("click", lang_select_btn_lis_bind);
        options_template_container.addEventListener("click", lang_select_btn_lis_bind);

        setSwiperSwiping(false);

    } else {
        dark_deep_background_div.removeEventListener("click", lang_select_btn_lis_bind);
        options_template_container.removeEventListener("click", lang_select_btn_lis_bind);

        setSwiperSwiping(true);

        lang_select_btn_click_count = 0;
    }
});

let help_control_btn_click_count = 0;
let help_control_btn_lis_bind = close_opened_option.bind(null, help_control_btn);

help_control_btn.addEventListener("click", function () {

    dark_overlay_active = !dark_deep_background_div.classList.contains("focused");
    dark_deep_background_div.classList.toggle("focused");

    toggle_elements([update_control_div, wifi_control_div, audio_control_div, face_encoding_div, record_control_div, identity_control_div, live_streaming_div, r_sync_div, advanced_switch_div, lang_select_div, switching_control_div]);
    help_control_div.classList.toggle("col");
    help_control_div.classList.toggle("focused");
    help_control_div.classList.toggle("higher");
    help_control_io_div.classList.toggle("focused");

    help_control_btn_click_count++;
    if (help_control_btn_click_count <= 1) {
        dark_deep_background_div.addEventListener("click", help_control_btn_lis_bind);
        options_template_container.addEventListener("click", help_control_btn_lis_bind);

        setSwiperSwiping(false);
    } else {
        dark_deep_background_div.removeEventListener("click", help_control_btn_lis_bind);
        options_template_container.removeEventListener("click", help_control_btn_lis_bind);

        setSwiperSwiping(true);

        help_control_btn_click_count = 0;
    }
});

let switching_control_btn_click_count = 0;
let switching_control_btn_lis_bind = close_opened_option.bind(null, switching_control_btn);

switching_control_btn.addEventListener("click", function () {

    dark_overlay_active = !dark_deep_background_div.classList.contains("focused");
    dark_deep_background_div.classList.toggle("focused");

    toggle_elements([update_control_div, wifi_control_div, audio_control_div, face_encoding_div, record_control_div, identity_control_div, live_streaming_div, r_sync_div, advanced_switch_div, lang_select_div, help_control_div]);
    switching_control_div.classList.toggle("col");
    switching_control_div.classList.toggle("focused");
    switching_control_div.classList.toggle("higher");
    switching_control_io_div.classList.toggle("focused");

    switching_control_btn_click_count++;
    if (switching_control_btn_click_count <= 1) {
        dark_deep_background_div.addEventListener("click", switching_control_btn_lis_bind);
        options_template_container.addEventListener("click", switching_control_btn_lis_bind);

        setSwiperSwiping(false);

        switching_disconnect_btn_i.innerHTML = translate_text_item(" Disconnect");
        switching_shutdown_btn_i.innerHTML = translate_text_item(" Restart");
        switching_reboot_btn_i.innerHTML = translate_text_item(" Shutdown");

    } else {
        dark_deep_background_div.removeEventListener("click", switching_control_btn_lis_bind);
        options_template_container.removeEventListener("click", switching_control_btn_lis_bind);

        setSwiperSwiping(true);

        switching_control_btn_click_count = 0;
    }
});

switching_disconnect_btn.addEventListener("click", function () {

    JSalert(translate_text_item("Disconnection"),
        translate_text_item("You are about to disconnect!"),
        translate_text_item("OK"), translate_text_item("CANCEL"), function () {
            request_asynchronous('/api/access', 'DELETE',
                'application/x-www-form-urlencoded; charset=UTF-8', null, function (req, err, response) {
                    if (err === "success") {
                        let response_data = JSON.parse(response.responseText);
                    }
                });

            if (window.leaveDevice !== undefined) {
                window.leaveDevice.postMessage("disconnect");
            } else {
                console.debug('not running inside a Flutter webview');
            }
        }, translate_text_item("disconnecting..."));

});

switching_reboot_btn.addEventListener("click", function () {

    JSalert(translate_text_item("Reboot"),
        translate_text_item("Device will restart."),
        translate_text_item("OK"), translate_text_item("CANCEL"), function () {
            request_asynchronous('/api/access?cause=restart', 'DELETE',
                'application/x-www-form-urlencoded; charset=UTF-8', null, function (req, err, response) {
                    if (err === "success") {
                        let response_data = JSON.parse(response.responseText);
                    }
                });

            if (window.leaveDevice !== undefined) {
                window.leaveDevice.postMessage("reboot");
            } else {
                console.debug('not running inside a Flutter webview');
            }
        }, translate_text_item("restarting..."));
});

switching_shutdown_btn.addEventListener("click", function () {

    JSalert(translate_text_item("Shutdown"),
        translate_text_item("You are about to shutdown device!"),
        translate_text_item("OK"), translate_text_item("CANCEL"), function () {
            request_asynchronous('/api/access?cause=shutdown', 'DELETE',
                'application/x-www-form-urlencoded; charset=UTF-8', null, function (req, err, response) {
                    if (err === "success") {
                        let response_data = JSON.parse(response.responseText);
                    }
                });

            if (window.shutdownDevice !== undefined) {
                window.shutdownDevice.postMessage("shutdown");
            } else {
                console.debug('not running inside a Flutter webview');
            }
        }, translate_text_item("shutting down..."));
});
