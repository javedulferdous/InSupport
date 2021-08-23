/* HC Pagination - NEEDS TO BE REFACTORED */
.paginationWrap {
  margin: 10px 0 20px;
  font-size: 0.9em;
  display: inline-block;
  width: 100%;
  clear: left;
}
.paginationWrap .hc_m_content,
.paginationWrap .hc_m_hd {
  border: #FFFFFF;
  background-color: #FFFFFF;
}
.paginationWrap .b2h,
.paginationWrap .b3h,
.paginationWrap .b4h,
.paginationWrap .b2bh,
.paginationWrap .b3bh,
.paginationWrap .b4bh {
  background-color: #FFFFFF;
}
#hc_map_main_ft .paginationListWrap {
  margin-bottom: 0;
}
#hc_map_main_ft .paginationListWrap .b1h,
#hc_map_main_ft .paginationListWrap .b2h,
#hc_map_main_ft .paginationListWrap .b3h,
#hc_map_main_ft .paginationListWrap .b4h,
#hc_map_main_ft .paginationListWrap .b1bh,
#hc_map_main_ft .paginationListWrap .b2bh,
#hc_map_main_ft .paginationListWrap .b3bh,
#hc_map_main_ft .paginationListWrap .b4bh {
  display: none;
}
#hc_map_main_ft .paginationListWrap .hc_m_outer,
#hc_map_main_ft .paginationListWrap .hc_m_content {
  background: #fff;
  border: none;
}
#hc_map_main_ft .tooManyPages {
  text-align: center;
  padding: 5px 10px;
  margin: 0;
  background: #0084C1;
  border-top: 1px solid #CCCCCC;
}
.hc_rtl #hc_map_main_ft .tooManyPages {
  direction: rtl;
}
.paginationListWrap ul {
  position: relative;
  padding: 0;
  margin: 0;
  float: left;
  display: inline;
  font-size: 1.1em;
}
.hc_rtl .paginationListWrap ul {
  float: right;
  direction: ltr;
}
.paginationListWrap ul li {
  display: block;
  float: left;
  padding: 2px 0;
  margin: 0;
  font-weight: bold;
}
.hc_rtl .paginationListWrap ul li {
  float: right;
}
.paginationListWrap ul li a {
  display: block;
  padding: 1px 4px;
  margin: 0 1px;
  border: 1px solid #CCCCCC;
  cursor: pointer;
}
.paginationListWrap ul li a:hover {
  text-decoration: none;
  border-color: #669900;
}
.paginationWrap .tooManyPages {
  margin: 0 0 20px;
  padding: 2px 10px 0;
  display: block;
  text-align: center;
}
.hc_rtl .paginationWrap .tooManyPages {
  direction: rtl;
}
.paginationListWrap .pageSizeDiv {
  margin: 0;
  padding: 0;
  display: block;
  float: right;
  overflow: hidden;
}
.hc_rtl .paginationListWrap .pageSizeDiv {
  float: left;
  *text-align: right;
  *direction: rtl;
}
.paginationListWrap .pageSizeDiv label {
  padding-top: 3px;
}
.hc_rtl .paginationListWrap .pageSizeDiv label {
  float: right;
  padding-left: 5px;
  padding-right: 0;
  *display: inline;
  *zoom: 1;
  *float: none;
  *vertical-align: middle;
}
.hc_rtl .pageSizeDiv span {
  *display: inline;
  *zoom: 1;
  *float: none;
  *vertical-align: middle;
}
.paginationListWrap a.hc_sr_paging_next,
.paginationListWrap a.hc_sr_paging_prev {
  text-decoration: none;
  border: none!important;
  padding: 0;
}
.paginationListWrap a.hc_sr_paging_next:hover,
.paginationListWrap a.hc_sr_paging_prev:hover {
  border: none!important;
}
.paginationListWrap a.hc_sr_paging_next .hc_icon,
.paginationListWrap a.hc_sr_paging_prev .hc_icon {
  display: block;
  height: 35px;
  width: 35px;
  padding: 0;
  margin: 0;
}
.paginationListWrap a.hc_sr_paging_next .hc_icon:before,
.paginationListWrap a.hc_sr_paging_prev .hc_icon:before {
  line-height: 35px;
  font-size: 1.5em;
}
/* PREVNEXT PAGING BEGIN */
.paginationListWrap ul.hc_sr_paging_prevnext {
  display: block;
  float: none;
  max-width: 100%;
  width: 100%!important;
}
.paginationListWrap ul.hc_sr_paging_prevnext li a {
  background: none;
  width: auto;
  position: relative;
  padding: 0;
  display: inline-block;
  line-height: 2em;
}
.paginationListWrap ul.hc_sr_paging_prevnext li.hc_sr_paging_nextLi {
  float: right;
  padding-right: 10px;
}
.hc_rtl .paginationListWrap ul.hc_sr_paging_prevnext li.hc_sr_paging_nextLi {
  float: left;
}
.paginationListWrap ul.hc_sr_paging_prevnext li.hc_sr_paging_prevLi a {
  padding-left: 20px;
}
.hc_rtl .paginationListWrap ul.hc_sr_paging_prevnext li.hc_sr_paging_prevLi a {
  padding-right: 20px;
  padding-left: 0;
}
.paginationListWrap ul.hc_sr_paging_prevnext li.hc_sr_paging_nextLi a {
  padding-right: 20px;
}
.hc_rtl .paginationListWrap ul.hc_sr_paging_prevnext li.hc_sr_paging_nextLi a {
  padding-left: 20px;
  padding-right: 0;
}
.paginationListWrap ul.hc_sr_paging_prevnext li.hc_sr_paging_prevLi a .hc_icon {
  position: absolute;
  top: 50%;
  margin-top: -0.55em;
  left: 0;
}
.hc_rtl .paginationListWrap ul.hc_sr_paging_prevnext li.hc_sr_paging_prevLi a .hc_icon {
  left: auto;
  right: 0;
}
.paginationListWrap ul.hc_sr_paging_prevnext li.hc_sr_paging_nextLi a .hc_icon {
  position: absolute;
  top: 50%;
  margin-top: -0.55em;
  left: auto;
  right: 0;
}
.hc_rtl .paginationListWrap ul.hc_sr_paging_prevnext li.hc_sr_paging_nextLi a .hc_icon {
  left: 0;
  right: auto;
}
/* PREVNEXT PAGING BEGIN */
.paginationListWrap .hc_paging_btn_next {
  display: block;
  float: right;
  min-width: 120px;
  margin-bottom: 20px;
}
.hc_rtl .paginationListWrap .hc_paging_btn_next {
  float: left;
}
.paginationListWrap .hc_paging_btn_prev {
  display: block;
  float: left;
  min-width: 120px;
  margin-bottom: 20px;
}
.hc_rtl .paginationListWrap .hc_paging_btn_prev {
  float: right;
}
.paginationListWrap .hc_paging_btn_next,
.paginationListWrap .hc_paging_btn_prev {
  margin-bottom: 0;
}
#hc_map_full .paginationListWrap .hc_paging_btn_next,
#hc_map_full .paginationListWrap .hc_paging_btn_prev {
  margin: 5px;
}
/* PREVNEXT PAGING END*/
.paginationListWrap .selectedpage,
.paginationListWrap .multiPages {
  padding: 4px;
}
.paginationListWrap .selectedpage {
  text-decoration: underline;
}
.hc_f_btn_v37,
.hc_f_btn_v38 {
  white-space: nowrap;
  font-weight: bold;
  text-align: center;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset, 0 1px 2px #333333;
  text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.3);
  height: 29px;
  line-height: 29px;
  padding: 0 10px;
  color: #FFFFFF !important;
  background-color: #3caa87;
  hack: 1 ; background-image: -moz-linear-gradient(center top , rgba(255,255,255,0.4) -10%, #3caa87 50%, #3caa87 50%, #3caa87 100%);
  hack: 1 ; background-image: -ms-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -webkit-gradient(linear, left top, left bottom, color-stop(-10%,rgba(255,255,255,0.4)), color-stop(100%, #3caa87));
  hack: 1 ; background-image: -webkit-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -o-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: linear-gradient(top, rgba(255,255,255,0.4) -10%, #3caa87 100%);
  /* filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='@affiliate-color-button'); */
  border: 1px solid #3caa87;
  *background-image: none;
  *border-color: #CCCCCC #000000 #000000 #CCCCCC;
  *border-style: solid;
  *border-width: 2px;
  position: relative;
  display: block;
  padding-right: 20px;
  font-size: 1.1em;
  margin: 0;
  text-decoration: none;
}
.hc_rtl .hc_f_btn_v37,
.hc_rtl .hc_f_btn_v38 {
  direction: rtl;
}
.hc_rtl .hc_f_btn_v37 .hc_icon,
.hc_rtl .hc_f_btn_v38 .hc_icon {
  left: auto;
  right: 0;
}
.hc_f_btn_v37:hover,
.hc_f_btn_v38:hover {
  text-decoration: none!important;
  cursor: pointer;
  color: #FFFFFF !important;
  background-color: #3caa87;
  hack: 1 ; background-image: -moz-linear-gradient(center top , rgba(255,255,255,0.4) -10%, #3caa87 50%, #3caa87 50%, #3caa87 100%);
  hack: 1 ; background-image: -ms-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -webkit-gradient(linear, left top, left bottom, color-stop(-10%,rgba(255,255,255,0.4)), color-stop(100%, #3caa87));
  hack: 1 ; background-image: -webkit-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -o-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: linear-gradient(top, rgba(255,255,255,0.4) -10%, #3caa87 100%);
  /* filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='@affiliate-color-button-hover'); */
  border-color: #3caa87;
  *background-image: none;
  *border-color: #CCCCCC #000000 #000000 #CCCCCC;
  *border-style: solid;
  *border-width: 2px;
}
.hc_f_btn_v37 .hc_icon,
.hc_f_btn_v38 .hc_icon {
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -0.6em;
  width: 20px;
  text-align: center;
}
.hc_f_btn_v38 {
  padding-right: 10px;
  padding-left: 20px;
}
.hc_f_btn_v38 .hc_icon {
  right: auto;
  left: 0;
}
.hc_icon.hc_t_pagination_next:before,
.hc_t_pagination_next .hc_icon:before {
  content: "\e921";
  font-family: icons;
}
.hc_rtl .hc_icon.hc_t_pagination_next:before,
.hc_rtl .hc_t_pagination_next .hc_icon:before {
  content: "\e922";
}
.hc_icon.hc_t_pagination_prev:before,
.hc_t_pagination_prev .hc_icon:before {
  content: "\e922";
  font-family: icons;
}
.hc_rtl .hc_icon.hc_t_pagination_prev:before,
.hc_rtl .hc_t_pagination_prev .hc_icon:before {
  content: "\e921";
}
/* end HC Pagination (NEEDS TO BE REFACTORED) */
/* --- HC Common - Map --- */
/* small map module */
#hc_map_static .b1h,
#hc_map_static .b2h,
#hc_map_static .b2bh,
#hc_map_static .b3h,
#hc_map_static .b3bh,
#hc_map_static .b4h,
#hc_map_static .b4bh,
#hc_map_static .hc_m_hd {
  display: none;
}
#hc_map_static .hc_m_outer {
  background: transparent;
  border: 0;
}
#hc_map_static .hc_m_content {
  padding: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
#hc_map_static a.hc_f_btn_v8 {
  position: absolute;
  left: 20px;
  bottom: 10px;
  min-width: 190px;
}
.hc_rtl #hc_map_static a.hc_f_btn_v8 {
  left: auto;
  right: 10px;
}
#hc_f_id_map_contract {
  display: none;
}
#hc_f_id_map_expand strong,
#hc_f_id_map_contract strong {
  font-weight: inherit;
}
/* small map */
#hc_map_static_inner {
  position: relative;
  overflow: hidden;
  padding: 0;
  height: 150px;
  width: 253px;
  cursor: pointer;
  border: 3px solid #fff;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  color: #CCCCCC;
  /* this determines the border color after image is loaded */
  background: url(https://cdn.datahc.com/Images/hc_img_map_noicons_lg.png?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) no-repeat center center;
}
.hc_rtl #hc_map_static_inner {
  direction: rtl;
}
#hc_map_static_inner:hover,
#hc_map_static_inner.hc_hover {
  border-color: #669900;
}
/* large map module */
#hc_map_main {
  display: none;
  overflow: hidden;
  background: #0084C1;
  z-index: 600;
}
.hc_page_landing #hc_map_main {
  background: none;
  display: block;
}
#hc_map_main.expanded {
  border: 1px solid #CCCCCC;
  margin-bottom: 10px;
  display: block;
}
.hc_page_landing #hc_map_main .b1h,
.hc_page_landing #hc_map_main .b2h,
.hc_page_landing #hc_map_main .b3h,
.hc_page_landing #hc_map_main .b4h,
.hc_page_landing #hc_map_main .b2bh,
.hc_page_landing #hc_map_main .b3bh,
.hc_page_landing #hc_map_main .b4bh {
  display: none;
}
#hc_map_main .hc_m_content .hc_map_info .b1h,
#hc_map_main .hc_m_content .hc_map_info .b2h,
#hc_map_main .hc_m_content .hc_map_info .b3h,
#hc_map_main .hc_m_content .hc_map_info .b4h,
#hc_map_main .hc_m_content .hc_map_info .b2bh,
#hc_map_main .hc_m_content .hc_map_info .b3bh,
#hc_map_main .hc_m_content .hc_map_info .b4bh {
  display: none;
}
.hc_page_landing #hc_map_main .hc_m_outer {
  background-color: transparent;
  border: 0;
}
#hc_map_main .hc_m_content {
  position: relative;
}
.hc_page_landing #hc_map_main .hc_m_content {
  text-align: center;
  padding: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
#hc_map_main .hc_map_info .hc_m_content {
  position: static;
}
.hc_page_landing #hc_map_main .hc_map_info .hc_m_content {
  text-align: left;
  background: transparent;
}
.hc_rtl.hc_page_landing #hc_map_main .hc_map_info .hc_m_content {
  text-align: right;
}
/* large map */
#hc_map_main .hc_map {
  display: block;
  overflow: hidden;
  height: 100px;
  background: url(https://cdn.datahc.com/Images/hc_img_map_noicons_lg.png?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) no-repeat center center;
}
.hc_page_landing #hc_map_main .hc_map {
  height: 150px;
  border: 3px solid #fff;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
#hc_map_main .hc_map:hover,
#hc_map_main .hc_map.hc_hover {
  cursor: pointer;
}
.hc_page_landing #hc_map_main .hc_map:hover,
.hc_page_landing #hc_map_main .hc_map.hc_hover {
  border-color: #669900;
}
#hc_map_main .hc_map.hc_active {
  height: 492px;
  background: none;
  border: 0px;
}
#hc_map_main_icons {
  overflow: hidden;
  width: 0;
  height: 0;
}
#hc_map_main .hc_map_show {
  position: absolute;
  bottom: 15px;
  left: 50%;
  display: block;
  min-width: 190px;
  margin-left: -105px;
}
.hc_rtl #hc_map_main .hc_map_show {
  direction: rtl;
  left: auto;
  right: 50%;
  margin-left: 0;
  margin-right: -95px;
}
#hc_map_main .hc_map_show:hover {
  border-color: #669900;
}
#hc_map_main .hc_map_main_controls {
  border-top: 1px solid #CCCCCC;
  text-align: right;
  background: #0084C1;
  padding: 2px 10px;
  color: #669900;
}
.hc_rtl #hc_map_main .hc_map_main_controls {
  direction: rtl;
  text-align: left;
}
#hc_map_main a#addMyPin {
  left: 241px;
}
#hc_map_main .paginationListWrap.hc_m_v9 {
  color: #333333;
}
#hc_map_main .paginationListWrap.hc_m_v9 ul li a {
  color: #669900;
}
/* map rollover tooltips */
#hc_map_tt {
  display: none;
  width: auto;
  overflow: hidden;
  padding: 2px 3px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  border: solid 1px #333333;
  cursor: pointer;
  z-index: 999;
  white-space: nowrap;
  font-size: 0.9em;
}
#hc_map_tt .hc_map_tt_name,
#hc_map_tt .hc_map_tt_price,
#hc_map_tt .hc_map_tt_rating {
  float: left;
  display: inline;
}
#hc_map_tt .hc_map_tt_name {
  font-weight: bold;
  display: block;
  width: auto!important;
}
#hc_map_tt .hc_map_tt_price {
  clear: left;
  padding-right: 5px;
  font-weight: bold;
}
#hc_map_tt .hc_map_tt_price .hc_pr_from {
  font-weight: normal;
}
#hc_map_tt .hc_map_tt_rating {
  margin-left: 5px;
  float: right;
}
.hc_rtl #hc_map_tt .hc_map_tt_rating {
  direction: rtl;
}
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating {
  height: 13px;
  margin: 0;
  padding: 0 !important;
  position: relative;
  top: -4px;
  width: 62px;
}
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating .hc-hotelrating__value:before {
  right: 0;
  left: auto;
  width: 50px;
}
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating .hc-hotelrating__value:after {
  right: 0;
  left: auto;
  width: 50px;
  text-align: left;
}
.hc_rtl #hc_map_tt .hc_map_tt_rating p.hc-hotelrating .hc-hotelrating__value:after {
  text-align: right;
}
.hc-hotelrating--star #hc_map_tt .hc_map_tt_rating p.hc-hotelrating .hc-hotelrating__value--1half:after,
.hc-hotelrating--star #hc_map_tt .hc_map_tt_rating p.hc-hotelrating .hc-hotelrating__value--2half:after,
.hc-hotelrating--star #hc_map_tt .hc_map_tt_rating p.hc-hotelrating .hc-hotelrating__value--3half:after,
.hc-hotelrating--star #hc_map_tt .hc_map_tt_rating p.hc-hotelrating .hc-hotelrating__value--4half:after,
.hc-hotelrating--star #hc_map_tt .hc_map_tt_rating p.hc-hotelrating .hc-hotelrating__value--5half:after {
  padding-right: 5px;
}
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating.hc-hotelrating--star .hc-hotelrating__value--1:before,
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating.hc-hotelrating--star .hc-hotelrating__value--1half:before,
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating.hc-hotelrating--star .hc-hotelrating__value--2:before,
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating.hc-hotelrating--star .hc-hotelrating__value--2half:before,
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating.hc-hotelrating--star .hc-hotelrating__value--3:before,
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating.hc-hotelrating--star .hc-hotelrating__value--3half:before,
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating.hc-hotelrating--star .hc-hotelrating__value--4:before,
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating.hc-hotelrating--star .hc-hotelrating__value--4half:before,
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating.hc-hotelrating--star .hc-hotelrating__value--5:before,
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating.hc-hotelrating--star .hc-hotelrating__value--5half:before {
  color: #cccccc;
  content: "\e955\e955\e955\e955\e955";
}
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating.hc-hotelrating--self .hc-hotelrating__value--1:before,
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating.hc-hotelrating--self .hc-hotelrating__value--1half:before,
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating.hc-hotelrating--self .hc-hotelrating__value--2:before,
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating.hc-hotelrating--self .hc-hotelrating__value--2half:before,
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating.hc-hotelrating--self .hc-hotelrating__value--3:before,
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating.hc-hotelrating--self .hc-hotelrating__value--3half:before,
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating.hc-hotelrating--self .hc-hotelrating__value--4:before,
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating.hc-hotelrating--self .hc-hotelrating__value--4half:before,
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating.hc-hotelrating--self .hc-hotelrating__value--5:before,
#hc_map_tt .hc_map_tt_rating p.hc-hotelrating.hc-hotelrating--self .hc-hotelrating__value--5half:before {
  color: #cccccc;
  content: "\e949\e949\e949\e949\e949";
}
#hc_map_tt .hc_map_tt_rating img {
  margin-right: 1px;
}
/* main map info windows */
.hc_map_info {
  font-size: 0.9em;
  position: relative;
  display: block;
  max-width: 400px;
  height: 80px;
}
.hc_rtl .hc_map_info {
  direction: rtl;
}
.hc_page_landing .hc_map_info {
  max-width: 350px;
}
.hc_map_info div,
.hc_map_info span,
.hc_map_info label,
.hc_map_info a {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
@media screen and (min-width: 0) {
  /* IE9-IE10 */
  .hc_map_info {
    hack: 1 ; width: 400px \0/;
  }
  .hc_page_landing .hc_map_info {
    hack: 1 ; width: 350px \0/;
  }
}
.hc_map_info .hc_f_select {
  margin: 5px 0 0 100px;
  display: inline-block;
  *margin-top: 3px;
}
.hc_rtl .hc_map_info .hc_f_select {
  margin-right: 100px;
  margin-left: 0;
}
.hc_map_info .hc_map_info_rating img {
  margin-right: 3px;
}
.hc_rtl .hc_map_info .hc_map_info_rating img {
  margin-right: 0;
  margin-left: 3px;
}
.hc_map_info .hc_map_info_rating .hc-hotelrating__value:before {
  display: none;
}
.hc_map_info .hc_map_info_rating .hc-hotelrating__value:after {
  position: relative;
  bottom: auto;
  left: auto;
}
.hc_map_info .hc_m_content {
  padding: 0;
}
.hc_map_info h3 {
  display: block;
  padding: 0 80px 0 104px;
  margin: 0;
  font-size: 1.2em;
  font-weight: bold;
}
.hc_rtl .hc_map_info h3 {
  padding-right: 104px;
  padding-left: 80px;
}
.hc_map_info .hc_map_info_photo {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 92px;
  height: 92px;
  hack: 1 ; widt\h: 88px;
  hack: 1 ; heigh\t: 88px;
  padding: 2px;
  border: 1px solid #CCCCCC;
  overflow: hidden;
}
.hc_rtl .hc_map_info .hc_map_info_photo {
  left: auto;
  right: 0;
}
.hc_map_info .hc_map_info_photo:hover {
  padding: 1px;
  border: 2px solid #669900;
}
.hc_map_info .hc_map_info_photo img {
  display: block;
}
.hc_map_info .hc_map_info_photo.hc_noImg img {
  position: absolute;
  top: 2px;
  left: -132px;
  clip: rect(0 222px 88px 134px);
}
.hc_map_info .hc_map_info_photo.hc_noImg:hover img {
  top: 1px;
  left: -133px;
}
.hc_map_info dl {
  display: block;
  margin: 0;
  padding: 0;
}
.hc_rtl .hc_map_info dl {
  direction: rtl;
}
.hc_map_info dt {
  display: none;
  margin: 0;
  padding: 0;
}
.hc_rtl .hc_map_info dt {
  direction: rtl;
}
.hc_map_info dd {
  display: block;
  margin: 0;
  padding: 0;
}
.hc_rtl .hc_map_info dd {
  direction: rtl;
}
.hc_map_info dd.hc_map_info_rating {
  display: block;
  position: absolute;
  top: 3px;
  right: 0;
  width: 80px;
  text-align: center;
  white-space: nowrap;
}
.hc_rtl .hc_map_info dd.hc_map_info_rating {
  right: auto;
  left: 0;
}
.hc_map_info dd.hc_map_info_addr {
  display: block;
  padding: 0 80px 0 104px;
}
.hc_rtl .hc_map_info dd.hc_map_info_addr {
  padding-right: 104px;
  padding-left: 80px;
}
.hc_map_info dd.hc_map_info_price {
  display: block;
  position: absolute;
  top: 22px;
  right: 0;
  width: 80px;
  text-align: center;
}
.hc_rtl .hc_map_info dd.hc_map_info_price {
  right: auto;
  left: 0;
}
.hc_map_info dd.hc_map_info_price span.hc_map_info_price_from {
  display: block;
  text-align: center;
  font-size: 0.9em;
  color: #999;
  line-height: 0.9em;
}
.hc_map_info dd.hc_map_info_price a {
  display: block;
  font-size: 1.4em;
  font-weight: bold;
  text-decoration: underline;
  outline: none;
}
.hc_lang_de .hc_map_info dd.hc_map_info_price a,
.hc_lang_el .hc_map_info dd.hc_map_info_price a,
.hc_lang_nl .hc_map_info dd.hc_map_info_price a,
.hc_lang_pl .hc_map_info dd.hc_map_info_price a {
  font-size: 1.3em;
}
.hc_cur_jpy .hc_map_info dd.hc_map_info_price a {
  font-size: 1.2em;
}
.hc_map_info dd.hc_map_info_price a span {
  font-size: 0.8em;
}
.hc_map_info dd.hc_map_info_price a span.hc_pr_from {
  display: block;
}
.hc_map_info dd.hc_map_info_price span.hc_map_info_price_currency {
  color: #999;
  display: block;
  text-align: center;
  font-size: 1em;
}
.hc_map_info a.hc_map_info_select {
  display: inline-block;
  padding: 1px 8px;
  font-size: 11px;
  font-weight: bold;
  border: 2px solid #333;
  border-top-color: #fff;
  border-left-color: #fff;
  background: #3caa87;
  color: #FFFFFF !important;
  cursor: pointer;
  text-align: center;
  clear: left;
  position: absolute;
  top: 74px;
  right: 11px;
}
.hc_rtl .hc_map_info a.hc_map_info_select {
  clear: right;
  direction: rtl;
  right: auto;
  left: 11px;
}
.hc_map_info a.hc_map_info_select span {
  display: none;
}
.hc_map_info a.hc_map_info_select:hover {
  text-decoration: none;
}
.hc_map_info a.hc_map_info_zoom {
  display: block;
  position: absolute;
  top: 82px;
  left: auto;
  right: 0;
  font-size: 1em;
}
.hc_rtl .hc_map_info a.hc_map_info_zoom {
  left: 0;
  right: auto;
}
.hc_map_info .hc_m_outer {
  border-left: none;
  border-right: none;
}
#hc_map {
  height: 450px;
  border: 1px solid #999999;
  float: left;
  background: transparent url(https://cdn.datahc.com/Images/loading_4.gif?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) no-repeat scroll center center ! important;
}
#hc_map.widemap {
  width: 100%;
  margin: 0 -1px;
}
/* current location button */
.hc_map_currLoc_wrapper {
  top: 10px!important;
  right: 110px;
  cursor: pointer;
  position: absolute;
}
.hc_e_currentLocation span {
  display: block;
  position: relative;
  width: 25px;
  height: 25px;
  background: #fff;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  border: 1px solid #8c8c8c;
  color: #6e6e6e;
  font-family: 'icons' !important;
  font-size: 15px;
  padding-top: 2.5px;
  padding-left: 2.5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 1px 3px;
}
.hc_e_currentLocation.hc_active span {
  background: rgba(0, 0, 0, 0.25);
}
.hc_e_currentLocation span:before {
  display: block;
  border: 1px solid #6e6e6e;
  border-radius: 20px;
  content: "\e918";
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 22px;
  text-indent: 1px;
}
/* json box */
#hc_f_sr_map_json {
  display: none;
}
#hc_f_sr_modal_json {
  display: none;
}
#hc_f_sr_filter_hotelCounts {
  display: none;
}
/* full screen map */
#hc_map_full {
  width: 0;
  height: 0;
  top: 10px;
  z-index: 998;
  background: #aaa;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  padding: 5px 5px 40px;
  border: none;
}
#hc_map_full .hc_m_arrow_top {
  display: none;
}
#hc_map_full .hc_m_close {
  top: -9px;
  right: -9px;
  z-index: 999;
  width: 24px;
  height: 24px;
  background: #aaa;
  -moz-border-radius: 12px;
  -webkit-border-radius: 12px;
  border-radius: 12px;
  font-size: 1em;
}
.hc_rtl #hc_map_full .hc_m_close {
  right: auto;
  left: -9px;
}
#hc_map_full .hc_m_close .hc_t_remove {
  width: 24px;
  height: 24px;
}
#hc_map_full .hc_m_close .hc_t_remove:before {
  width: 24px;
  height: 24px;
  line-height: 25px;
  font-size: 1.2em;
  font-weight: normal;
  color: #fff;
  right: 0;
}
.hc_rtl #hc_map_full .hc_m_close .hc_t_remove:before {
  right: auto;
  left: 0;
}
#hc_map_full .hc_m_hd {
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 998;
  padding-left: 0;
  padding-right: 0;
}
.hc_rtl #hc_map_full .hc_m_hd {
  left: auto;
  right: 5px;
}
#hc_map_full .hc_m_content .hc_m_hd {
  display: none;
}
#hc_map_full .hc_m_content,
#hc_map_full .hc_m_hd {
  border: none;
}
#hc_map_full .hc_m_hd h2 {
  color: #fff;
  font-size: 1.4em;
  padding-bottom: 5px;
  background: #aaa;
  padding: 5px 20px 5px 15px;
  float: left;
  height: 30px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -moz-border-radius: 0 0 2px 0;
  -webkit-border-radius: 0 0 2px 0;
  border-radius: 0 0 2px 0;
}
.hc_rtl #hc_map_full .hc_m_hd h2 {
  padding-right: 15px;
  padding-left: 20px;
  float: right;
  -moz-border-radius: 0 0 0 2px;
  -webkit-border-radius: 0 0 0 2px;
  border-radius: 0 0 0 2px;
}
#hc_map_full .hc_m_outer,
#hc_map_full .hc_m_content {
  width: 100%;
  height: 100%;
  background: transparent;
  padding: 0;
  position: static;
}
#hc_map_full .hc_map {
  width: 100%;
  height: 100%;
  background: #fff;
}
#hc_map_full #hc_map_main_ft .paginationListWrap {
  height: 40px;
}
#hc_map_full #hc_map_main_ft .paginationListWrap .hc_m_hd {
  display: none;
}
#hc_map_full #hc_map_main_ft .paginationListWrap .hc_m_outer,
#hc_map_full #hc_map_main_ft .paginationListWrap .hc_m_content {
  width: auto;
  height: auto;
}
#hc_map_full #hc_map_main_ft .paginationListWrap .hc_m_outer {
  border-left: 0;
  border-right: 0;
  padding-left: 0;
  padding-right: 0;
}
#hc_map_full #hc_map_main_ft .paginationListWrap .hc_m_content {
  padding: 5px 9px;
}
#hc_map_full #hc_map_main_ft .paginationListWrap.hc_m_v9 {
  color: #333333;
}
#hc_map_full #hc_map_main_ft .paginationListWrap.hc_m_v9 ul li a {
  color: #669900;
}
#hc_map_full #hc_map_main_ft .paginationListWrap ul.hc_sr_paging_prevnext li,
#hc_map_full #hc_map_main_ft .paginationListWrap ul.hc_sr_paging_prevnext li a {
  padding-top: 0;
  padding-bottom: 0;
}
#hc_map_full .hc_m_content .hc_map_info .b1h,
#hc_map_full .hc_m_content .hc_map_info .b2h,
#hc_map_full .hc_m_content .hc_map_info .b3h,
#hc_map_full .hc_m_content .hc_map_info .b4h,
#hc_map_full .hc_m_content .hc_map_info .b2bh,
#hc_map_full .hc_m_content .hc_map_info .b3bh,
#hc_map_full .hc_m_content .hc_map_info .b4bh {
  display: none;
}
#hc_map_full.hc_map_only {
  top: 0;
  padding-bottom: 5px;
}
#hc_map_full.hc_map_only .hc_m_close {
  display: none;
}
#hc_map_full.hc_map_only .paginationListWrap {
  display: none;
}
#hc_map_full .hc_map_tooltiplabel {
  color: #fff;
  padding: 5px;
  white-space: nowrap;
}
#hc_map_full .hc_map_tooltiplabel_normal {
  background-color: #3caa87;
}
#hc_map_full .hc_map_tooltiplabel_hovered {
  background-color: #3caa87;
}
#hc_map_full .hc_map_tooltiplabel_border {
  background-color: white;
}
#hc_map_full {
  min-width: 950px;
  min-height: 682px;
}
#hc_map_full .hc_rating_t_star:before,
#hc_map_full .hc_rating_t_self:before,
#hc_map_full .hc_rating_t_star:after,
#hc_map_full .hc_rating_t_self:after {
  bottom: 0;
}
.hc_map_infowindow_summary #hc_map_full .hc_rating_t_star:before,
.hc_map_infowindow_summary #hc_map_full .hc_rating_t_self:before,
.hc_map_infowindow_summary #hc_map_full .hc_rating_t_star:after,
.hc_map_infowindow_summary #hc_map_full .hc_rating_t_self:after {
  bottom: -3px;
}
#hc_map_full #hc_map_tt_alternate,
#hc_map_full #hc_map_tt_simple {
  display: none;
  width: auto;
  overflow: hidden;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 999;
  white-space: nowrap;
  -moz-box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.25);
  box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.25);
}
.hc_rtl #hc_map_full #hc_map_tt_alternate,
.hc_rtl #hc_map_full #hc_map_tt_simple {
  direction: rtl;
}
#hc_map_full #hc_map_tt_alternate .hc_map_tt_name,
#hc_map_full #hc_map_tt_simple .hc_map_tt_name {
  font-size: 1.17em;
  font-weight: bold;
  display: block;
  min-width: 265px;
  width: auto !important;
  padding-bottom: 6px;
}
#hc_map_full #hc_map_tt_alternate .hc_map_tt_rating,
#hc_map_full #hc_map_tt_simple .hc_map_tt_rating {
  display: inline-block;
  padding-bottom: 0;
}
#hc_map_full #hc_map_tt_alternate .hc_map_tt_rating span,
#hc_map_full #hc_map_tt_simple .hc_map_tt_rating span {
  display: inline-block;
}
#hc_map_full #hc_map_tt_alternate .hc_map_tt_sentimentprice,
#hc_map_full #hc_map_tt_simple .hc_map_tt_sentimentprice {
  padding-top: 10px;
}
#hc_map_full #hc_map_tt_alternate .hc_map_tt_price,
#hc_map_full #hc_map_tt_simple .hc_map_tt_price {
  float: right;
  padding-top: 5px;
  padding-bottom: 0;
  font-size: 14px;
  color: #669900;
}
#hc_map_full #hc_map_tt_alternate .hc_map_tt_price .hc_pr_cur,
#hc_map_full #hc_map_tt_simple .hc_map_tt_price .hc_pr_cur,
#hc_map_full #hc_map_tt_alternate .hc_map_tt_price .hc_pr_syb,
#hc_map_full #hc_map_tt_simple .hc_map_tt_price .hc_pr_syb {
  font-size: 1em;
}
.hc_rtl #hc_map_full #hc_map_tt_alternate .hc_map_tt_price,
.hc_rtl #hc_map_full #hc_map_tt_simple .hc_map_tt_price {
  float: left;
}
#hc_map_full #hc_map_tt_alternate .hc_map_tt_spinner,
#hc_map_full #hc_map_tt_simple .hc_map_tt_spinner {
  float: right;
  width: 20px;
  height: 20px;
}
#hc_map_full #hc_map_tt_alternate .hc_map_tt_price .hc_pr_from,
#hc_map_full #hc_map_tt_simple .hc_map_tt_price .hc_pr_from {
  font-weight: normal;
}
#hc_map_full #hc_map_tt_alternate .hc_map_tt_sentiment,
#hc_map_full #hc_map_tt_simple .hc_map_tt_sentiment {
  float: left;
  font-weight: bold;
  font-size: 14px;
  color: #669900;
  padding-top: 5px;
  padding-bottom: 0;
}
.hc_rtl #hc_map_full #hc_map_tt_alternate .hc_map_tt_sentiment,
.hc_rtl #hc_map_full #hc_map_tt_simple .hc_map_tt_sentiment {
  float: right;
}
#hc_map_full #hc_map_tt_alternate .hc_map_tt_from,
#hc_map_full #hc_map_tt_simple .hc_map_tt_from {
  font-size: 0.6em;
}
#hc_map_tt_simple {
  font-size: 1.2em;
  font-weight: bold;
  color: #2c4162;
}
.hc_map_tt_ratingsize .hc_map_tt_rating {
  height: 16px;
  vertical-align: middle;
}
.hc_map_tt_ratingsize .hc_rating_t_self,
.hc_map_tt_ratingsize .hc_rating_t_star {
  height: 16px;
}
.hc_map_tt_ratingsize .hc_rating_t_self:before,
.hc_map_tt_ratingsize .hc_rating_t_star:before,
.hc_map_tt_ratingsize .hc_rating_t_self:after,
.hc_map_tt_ratingsize .hc_rating_t_star:after {
  bottom: auto;
  top: 3px;
}
.hc_map_tt_ratingsize .hc_rating_half,
.hc_map_tt_ratingsize .hc_rating_1 {
  width: 15px;
}
.hc_map_tt_ratingsize .hc_rating_1half,
.hc_map_tt_ratingsize .hc_rating_2 {
  width: 30px;
}
.hc_map_tt_ratingsize .hc_rating_2half,
.hc_map_tt_ratingsize .hc_rating_3 {
  width: 45px;
}
.hc_map_tt_ratingsize .hc_rating_3half,
.hc_map_tt_ratingsize .hc_rating_4 {
  width: 60px;
}
.hc_map_tt_ratingsize .hc_rating_4half,
.hc_map_tt_ratingsize .hc_rating_5 {
  width: 75px;
}
.hc_map_tt_ratingsize .hc_map_tt_sentiment_secretdeal {
  vertical-align: middle;
}
#hc_map_full .hc_m_hd {
  padding-right: 160px;
}
.hc_rtl #hc_map_full .hc_m_hd {
  padding-right: 0;
  padding-left: 160px;
}
.hc-filtertagwrapper {
  clear: left;
  display: inline;
  overflow: hidden;
  margin-right: 160px;
}
.hc_rtl.hc-filtertagwrapper {
  margin-left: 160px;
  clear: right;
}
.hc-filtertag {
  display: block;
  position: relative;
  float: left;
  margin: 8px 0 0px 10px;
  padding: 3px 30px 3px 15px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: #669900;
  color: #fff;
  max-width: 130px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.hc_rtl .hc-filtertag {
  float: right;
  margin-left: 0;
  margin-right: 10px;
  padding-left: 30px;
  padding-right: 15px;
  direction: rtl;
}
.hc-filtertag:after {
  content: "\e800";
  font-family: icons;
  color: #fff;
  display: block;
  position: absolute;
  top: 2px;
  right: 5px;
  font-size: 16px;
}
.hc_rtl.hc-filtertag:after {
  right: auto;
  left: 5px;
}
.hc-filtertag--starrating {
  width: 50px;
  padding-top: 1px;
  padding-bottom: 4px;
}
.hc-filtertag--clearall {
  padding-right: 15px;
  padding-left: 15px;
}
.hc-filtertag--clearall:after {
  content: "";
}
#hc_map_full .hc_m_content .hc_m_hd {
  display: block;
  position: relative;
  top: auto;
  left: auto;
  right: auto;
}
.hc-mapfilters {
  width: 300px;
  text-align: left;
}
.hc_rtl .hc-mapfilters {
  text-align: right;
}
.hc-mapfilters__button {
  display: block;
}
.hc-mapfilters .hc-mapfilters__buttonlink {
  display: block;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 40px;
  height: 38px;
  line-height: 38px;
  background: #0084C1;
  color: #FFFFFF;
  text-decoration: none;
  font-size: 1.25em;
  font-weight: bold;
  text-align: center;
}
.hc-mapfilters .hc-mapfilters__buttonlink:before,
.hc-mapfilters .hc-mapfilters__buttonlink:after {
  position: absolute;
  top: 0;
  font-family: icons;
  color: #FFFFFF;
  text-align: center;
  width: 40px;
  height: 40px;
  font-size: 20px;
  font-weight: normal;
}
.hc-mapfilters .hc-mapfilters__buttonlink:before {
  left: 0;
  content: "\e940";
}
.hc_rtl .hc-mapfilters .hc-mapfilters__buttonlink:before {
  left: auto;
  right: 0;
}
.hc-mapfilters .hc-mapfilters__buttonlink:after {
  right: 0;
  content: "\e920";
}
.hc_rtl .hc-mapfilters .hc-mapfilters__buttonlink:after {
  left: 0;
  right: auto;
}
.hc-mapfilters__options {
  background: #fff;
  overflow: auto;
}
.hc-mapfilters--expanded .hc-mapfilters__buttonlink:after {
  content: "\e923";
}
.hc-filter {
  border-bottom: 1px solid #f4f4f4;
}
.hc-filter__fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}
.hc-filter__header {
  padding: 0;
}
.hc-filter .hc-filter__headerlink {
  color: #333333;
  text-decoration: none;
  display: block;
  padding: 10px 30px 10px 10px;
  position: relative;
}
.hc_rtl .hc-filter .hc-filter__headerlink {
  padding-left: 30px;
  padding-right: 10px;
}
.hc-filter .hc-filter__headerlink:after {
  font-family: "icons";
  content: "\e920";
  color: #669900;
  display: inline-block;
  font-size: 20px;
  font-weight: normal;
  position: absolute;
  top: 0;
  right: 0;
  width: 37px;
  height: 37px;
  line-height: 37px;
  text-align: center;
}
.hc_rtl .hc-filter .hc-filter__headerlink:after {
  right: auto;
  left: 0;
}
.hc-filter .hc-filter__headerlink--expanded:after {
  content: "\e923";
}
.hc-filter__options {
  padding: 0 0 10px;
}
.hc-filter .hc-checkbox .hc_rating_t_star,
.hc-filter .hc-checkbox .hc_rating_t_self {
  display: inline-block;
  height: 13px;
}
.hc-filter .hc-checkbox .hc_rating_t_star:before,
.hc-filter .hc-checkbox .hc_rating_t_self:before,
.hc-filter .hc-checkbox .hc_rating_t_star:after,
.hc-filter .hc-checkbox .hc_rating_t_self:after {
  bottom: auto;
  top: 0;
  width: 72px;
}
.hc-filter .hc-checkbox:hover {
  background: #f4f4f4;
}
.hc-filter .hc-checkbox__label .hc_pr_cur,
.hc-filter .hc-checkbox__label .hc_pr_syb {
  font-size: 1em;
}
.hc-hotelrating__value:before,
.hc-hotelrating__value:after {
  font-size: 0.9em;
}
#hc_map_infowindow_alternate {
  width: 300px;
  background-color: #FFF;
  -moz-box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.25);
  box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.25);
}
#hc_map_infowindow_alternate .hc_map_infowindow_close {
  position: absolute;
  top: -9px;
  right: -9px;
  z-index: 800;
  width: 24px;
  height: 24px;
  background: #669900;
  -moz-border-radius: 12px;
  -webkit-border-radius: 12px;
  border-radius: 12px;
  font-size: 1em;
  text-decoration: none;
}
.hc_rtl #hc_map_infowindow_alternate .hc_map_infowindow_close {
  right: auto;
  left: -9px;
}
#hc_map_infowindow_alternate .hc_map_infowindow_close .hc_t_remove {
  width: 24px;
  height: 24px;
}
#hc_map_infowindow_alternate .hc_map_infowindow_close .hc_t_remove:before {
  width: 24px;
  height: 24px;
  line-height: 25px;
  font-size: 1.2em;
  font-weight: normal;
  color: #fff;
  right: 0;
}
.hc_rtl #hc_map_infowindow_alternate .hc_map_infowindow_close .hc_t_remove:before {
  right: auto;
  left: 0;
}
#hc_map_infowindow_alternate .hc_map_infowindow_summary {
  background-color: #0084C1;
  padding: 12px 12px 12px 40px;
  position: relative;
}
#hc_map_infowindow_alternate .hc_map_infowindow_summary_collapsed {
  padding-right: 40px;
}
.hc_rtl #hc_map_infowindow_alternate .hc_map_infowindow_summary_collapsed {
  padding-left: 40px;
}
#hc_map_infowindow_alternate .hc_map_infowindow_summary_collapsed:after {
  display: block;
  position: absolute;
  top: 15px;
  right: 5px;
  width: 30px;
  height: 30px;
  content: "\e923";
  font-family: icons;
  color: #669900;
  font-size: 24px;
  cursor: pointer;
}
.hc_rtl #hc_map_infowindow_alternate .hc_map_infowindow_summary_collapsed:after {
  right: auto;
  left: 5px;
}
.hc_rtl #hc_map_infowindow_alternate .hc_map_infowindow_summary {
  padding-left: 12px;
  padding-right: 40px;
  direction: rtl;
}
#hc_map_infowindow_alternate .hc_map_infowindow_summary h2 {
  font-size: 1.17em;
  padding-bottom: 1px;
}
#hc_map_infowindow_alternate .hc_map_infowindow_summary h2 a {
  color: #FFFFFF;
  text-decoration: none;
}
#hc_map_infowindow_alternate .hc_map_infowindow_summary p {
  display: inline-block;
}
#hc_map_infowindow_alternate .hc_map_infowindow_summary .hc_map_infowindow_address {
  font-size: 0.84em;
  padding-bottom: 0;
}
#hc_map_infowindow_alternate .hc_map_infowindow_summary .hc_map_infowindow_address a {
  color: #333333;
  text-decoration: none;
}
#hc_map_infowindow_alternate .hc_map_infowindow_summary .hc_rating_t_star,
#hc_map_infowindow_alternate .hc_map_infowindow_summary .hc_rating_t_self {
  margin-left: 3px;
  font-size: 0.84em;
  width: 61px;
}
.hc_rtl #hc_map_infowindow_alternate .hc_map_infowindow_summary .hc_rating_t_star,
.hc_rtl #hc_map_infowindow_alternate .hc_map_infowindow_summary .hc_rating_t_self {
  margin-left: 0;
  margin-right: 3px;
}
#hc_map_infowindow_alternate .hc-map-infowindow-gallery {
  position: relative;
  width: 300px;
  height: 180px;
}
#hc_map_infowindow_alternate .hc-map-infowindow-gallery .hc-map-infowindow-gallery__inner {
  height: 180px;
  overflow: hidden;
}
#hc_map_infowindow_alternate .hc-map-infowindow-gallery .hc-map-infowindow-gallery__list {
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
}
#hc_map_infowindow_alternate .hc-map-infowindow-gallery .hc-map-infowindow-gallery__item {
  width: 300px;
  height: 180px;
  margin: 0;
  padding: 0;
  background-size: cover;
  background-position: center center;
  float: left;
  background-image: url(https://cdn.datahc.com/Content/Images/Mobile/Shared/hc_loader1i.gif?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38);
}
.hc_rtl #hc_map_infowindow_alternate .hc-map-infowindow-gallery .hc-map-infowindow-gallery__item {
  float: right;
  margin-right: 0;
}
#hc_map_infowindow_alternate .hc-map-infowindow-gallery .hc-map-infowindow-gallery__previousbutton,
#hc_map_infowindow_alternate .hc-map-infowindow-gallery .hc-map-infowindow-gallery__nextbutton {
  text-decoration: none;
  display: block;
  width: 35px;
  height: 35px;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  position: absolute;
  top: 73px;
}
#hc_map_infowindow_alternate .hc-map-infowindow-gallery .hc-map-infowindow-gallery__previousbutton:before,
#hc_map_infowindow_alternate .hc-map-infowindow-gallery .hc-map-infowindow-gallery__nextbutton:before {
  font-size: 3em;
}
#hc_map_infowindow_alternate .hc-map-infowindow-gallery .hc-map-infowindow-gallery__previousbutton:hover,
#hc_map_infowindow_alternate .hc-map-infowindow-gallery .hc-map-infowindow-gallery__nextbutton:hover,
#hc_map_infowindow_alternate .hc-map-infowindow-gallery .hc-map-infowindow-gallery__previousbutton:focus,
#hc_map_infowindow_alternate .hc-map-infowindow-gallery .hc-map-infowindow-gallery__nextbutton:focus {
  text-decoration: none;
  color: #fff;
}
#hc_map_infowindow_alternate .hc-map-infowindow-gallery .hc-map-infowindow-gallery__previousbutton {
  left: 0;
}
#hc_map_infowindow_alternate .hc-map-infowindow-gallery .hc-map-infowindow-gallery__previousbutton:before {
  font-family: "icons";
  content: "\e922";
}
.hc_rtl #hc_map_infowindow_alternate .hc-map-infowindow-gallery .hc-map-infowindow-gallery__previousbutton:before {
  font-family: "icons";
  content: "\e921";
}
.hc_rtl #hc_map_infowindow_alternate .hc-map-infowindow-gallery .hc-map-infowindow-gallery__previousbutton {
  right: 0;
  left: auto;
}
#hc_map_infowindow_alternate .hc-map-infowindow-gallery .hc-map-infowindow-gallery__nextbutton {
  right: 0;
}
#hc_map_infowindow_alternate .hc-map-infowindow-gallery .hc-map-infowindow-gallery__nextbutton:before {
  font-family: "icons";
  content: "\e921";
}
.hc_rtl #hc_map_infowindow_alternate .hc-map-infowindow-gallery .hc-map-infowindow-gallery__nextbutton:before {
  font-family: "icons";
  content: "\e922";
}
.hc_rtl #hc_map_infowindow_alternate .hc-map-infowindow-gallery .hc-map-infowindow-gallery__nextbutton {
  left: 0;
  right: auto;
}
#hc_map_infowindow_alternate .hc_map_infowindow_rating {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
  font-size: 1.17em;
  font-weight: bold;
  color: #fff;
  background-color: #669900;
}
.hc_rtl #hc_map_infowindow_alternate .hc_map_infowindow_rating {
  left: auto;
  right: 0;
}
#hc_map_infowindow_alternate .hc_map_infowindow_details {
  padding: 10px 5px 5px 5px;
  background-color: #FFFFFF;
}
#hc_map_infowindow_alternate .hc_map_infowindow_details .hc_map_infowindow_sentiments {
  display: block;
  text-align: center;
  color: #333333;
}
#hc_map_infowindow_alternate .hc_map_infowindow_details .hc_map_infowindow_sentiments ul {
  padding: 0;
  margin: 0;
  display: inline-block;
}
#hc_map_infowindow_alternate .hc_map_infowindow_details .hc_map_infowindow_sentiments li {
  list-style: none;
  font-style: italic;
  display: inline-block;
}
#hc_map_infowindow_alternate .hc_map_infowindow_nodeals {
  border: 3px solid #0084C1;
  min-height: 103px;
  text-align: center;
  padding-top: 5px;
}
#hc_map_infowindow_alternate .hc_map_infowindow_nodeals_minrate {
  margin-top: 10px;
  font-size: 1.7em;
  color: #669900;
  padding-bottom: 2px;
}
#hc_map_infowindow_alternate .hc_map_infowindow_nodeals_minrate_from {
  display: block;
  font-size: 0.8em;
}
#hc_map_infowindow_alternate .hc_map_infowindow_nodeals_minrate .hc_pr_cur {
  display: inline-block;
  font-size: 0.6em;
}
#hc_map_infowindow_alternate .hc_map_infowindow_nodeals_select {
  margin-top: 30px;
  display: inline-block;
  min-width: 130px;
}
#hc_map_infowindow_alternate .hc_map_infowindow_nodeals_select a {
  display: block;
  background-color: #3caa87;
  color: #FFFFFF !important;
  text-decoration: none !important;
  font-weight: bold;
  padding: 8px;
  font-size: 1.2em;
}
#hc_map_infowindow_alternate .hc_map_infowindow_nominrate .hc_map_infowindow_nodeals_minrate {
  display: none;
}
#hc_map_infowindow_alternate .hc_map_infowindow_nominrate .hc_map_infowindow_nodeals_select {
  margin-top: 30px;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deals {
  overflow-y: auto;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deals_header {
  background-color: #0084C1;
  text-align: center;
  font-weight: bold;
  color: #FFFFFF;
  padding: 5px 3px 0px 3px;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deals_fulllist {
  border-left: 3px solid #CCCCCC;
  border-right: 3px solid #CCCCCC;
  border-top: 1px solid #CCCCCC;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deals_fulllist a {
  text-decoration: none;
  display: block;
  padding: 0 10px;
  line-height: 40px;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deals_showmore,
#hc_map_infowindow_alternate .hc_map_infowindow_deals_hide {
  border: 3px solid #CCCCCC;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deals_showmore a,
#hc_map_infowindow_alternate .hc_map_infowindow_deals_hide a {
  text-decoration: none;
  text-align: center;
  display: block;
  padding: 0 10px;
  line-height: 40px;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deals_showmore a:after,
#hc_map_infowindow_alternate .hc_map_infowindow_deals_hide a:after {
  font-family: icons;
  content: "\e920";
  font-weight: bold;
  position: relative;
  font-size: 20px;
  line-height: 20px;
  top: 5px;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deals_showmore {
  border-top: 0;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deals_hide a:after {
  content: "\e923";
  top: 5px;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal {
  display: block;
  padding: 0 150px 0 0;
  position: relative;
  min-height: 70px;
  border-left: 3px solid #CCCCCC;
  border-right: 3px solid #CCCCCC;
  border-bottom: 1px solid #CCCCCC;
}
.hc_rtl #hc_map_infowindow_alternate .hc_map_infowindow_deal {
  padding-right: 0;
  padding-left: 150px;
  direction: rtl;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal:last-child {
  border-bottom: 0;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal_providerlogo img {
  height: 27px;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal .hc-bookwithhotel {
  width: auto;
  text-align: left;
  margin-bottom: 5px;
}
.hc_rtl #hc_map_infowindow_alternate .hc_map_infowindow_deal .hc-bookwithhotel {
  text-align: right;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal .hc-bookwithhotel__link {
  padding-left: 5px;
  padding-right: 5px;
  min-height: 27px;
  cursor: default;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal_room {
  padding-left: 8px;
  padding-top: 7px;
}
.hc_rtl #hc_map_infowindow_alternate .hc_map_infowindow_deal_room {
  padding-left: 0;
  padding-right: 8px;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal_room_name {
  font-size: 1.17em;
  color: #333333;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal_room_deals {
  color: #669900;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal_pricesection {
  position: absolute;
  width: 150px;
  padding: 7px 5px 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  top: 0;
  right: 0;
  text-align: right;
}
.hc_rtl #hc_map_infowindow_alternate .hc_map_infowindow_deal_pricesection {
  right: auto;
  left: 0;
  text-align: left;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal_price {
  color: #669900;
  padding-bottom: 0;
  font-size: 1.5em;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal_price .hc_pr_cur {
  display: none;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal_viewdeal {
  display: inline-block;
  margin-top: 3px;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal_viewdeal a {
  display: block;
  padding: 4px 10px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  background-color: #3caa87;
  color: #FFFFFF !important;
  text-decoration: none !important;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal_viewdeal a:hover {
  background-color: #3caa87;
}
#hc_map_infowindow_alternate .hc_map_infowindow_current a {
  cursor: default;
}
#hc_map_infowindow_alternate .hc_map_infowindow_current a.hc-map-infowindow-gallery__nextbutton,
#hc_map_infowindow_alternate .hc_map_infowindow_current a.hc-map-infowindow-gallery__previousbutton {
  cursor: pointer;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal_recommended {
  border: 3px solid #0084C1;
  min-height: 103px;
}
.hc_lang_ru #hc_map_infowindow_alternate .hc_map_infowindow_deal_recommended,
.hc_lang_sr #hc_map_infowindow_alternate .hc_map_infowindow_deal_recommended,
.hc_lang_hu #hc_map_infowindow_alternate .hc_map_infowindow_deal_recommended,
.hc_lang_uk #hc_map_infowindow_alternate .hc_map_infowindow_deal_recommended,
.hc_lang_lt #hc_map_infowindow_alternate .hc_map_infowindow_deal_recommended,
.hc_lang_lv #hc_map_infowindow_alternate .hc_map_infowindow_deal_recommended {
  min-height: 117px;
}
.hc_lang_ja #hc_map_infowindow_alternate .hc_map_infowindow_deal_recommended {
  min-height: 124px;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal_recommended:last-child {
  border: 3px solid #0084C1;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal_recommended .hc_map_infowindow_deal_room {
  padding-top: 10px;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal_recommended .hc_map_infowindow_deal_pricesection {
  text-align: center;
  padding-top: 10px;
}
.hc_rtl #hc_map_infowindow_alternate .hc_map_infowindow_deal_recommended .hc_map_infowindow_deal_pricesection {
  text-align: center;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal_recommended .hc_map_infowindow_deal_price {
  font-size: 16px;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal_recommended .hc_map_infowindow_deal_price .hc_pr_cur {
  display: inline-block;
  font-size: 1em;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal_recommended .hc_map_infowindow_deal_price .hc_pr_syb {
  font-size: 1em;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal_recommended .hc_map_infowindow_deal_viewdeal {
  min-width: 130px;
  margin-top: 5px;
}
#hc_map_infowindow_alternate .hc_map_infowindow_deal_recommended .hc_map_infowindow_deal_viewdeal a {
  font-weight: normal;
  padding: 6px 5px;
  font-size: 16px;
}
#hc_map_infowindow_alternate .hc_map_infowindow_spinner {
  position: absolute;
  left: 140px;
  top: 40px;
}
.hc_rtl #hc_map_infowindow_alternate .hc_map_infowindow_spinner {
  left: auto;
  right: 140px;
}
#hc_map_infowindow_alternate .hc_map_infowindow_spinner img {
  height: 20px;
  width: 20px;
}
#hc_map_infowindow_alternate.hc_map_infowindow_soldout .hc_map_infowindow_mapicon {
  background-position: -70px -180px;
}
#hc_map_infowindow_alternate.hc_map_infowindow_soldout .hc_map_infowindow_deal_recommended {
  padding: 0;
}
#hc_map_infowindow_alternate.hc_map_infowindow_soldout .hc_map_infowindow_soldoutmessage {
  text-align: center;
  vertical-align: middle;
  line-height: 100px;
  font-size: 1.17em;
  font-weight: bold;
  color: #B80000;
}
.hc_map_infowindow_boundaryhotel .hc_map_infowindow_mapicon_container {
  position: absolute;
  top: 12px;
  left: 13px;
  width: 15px;
}
.hc_rtl .hc_map_infowindow_boundaryhotel .hc_map_infowindow_mapicon_container {
  left: auto;
  right: 13px;
}
.hc_map_infowindow_boundaryhotel .hc_map_infowindow_mapicon {
  background-image: url(https://cdn.datahc.com/Images/Maps/map_pins.png?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38);
  background-position: -70px -180px;
  width: 30px;
  height: 34px;
  zoom: 0.5;
  -moz-transform: scale(0.5);
  -moz-transform-origin: 0 0;
}
.hc_map_infowindow_mainhotel .hc_map_infowindow_mapicon_container {
  position: absolute;
  top: 12px;
  left: 10px;
  width: 20px;
}
.hc_rtl .hc_map_infowindow_mainhotel .hc_map_infowindow_mapicon_container {
  left: auto;
  right: 10px;
}
.hc_map_infowindow_mainhotel .hc_map_infowindow_mapicon {
  background-image: url(https://cdn.datahc.com/Images/Maps/map_pins.png?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38);
  width: 40px;
  height: 53px;
  zoom: 0.5;
  -moz-transform: scale(0.5);
  -moz-transform-origin: 0 0;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_0 .hc_map_infowindow_mapicon {
  background-position: -20px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_1 .hc_map_infowindow_mapicon {
  background-position: -70px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_2 .hc_map_infowindow_mapicon {
  background-position: -120px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_3 .hc_map_infowindow_mapicon {
  background-position: -170px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_4 .hc_map_infowindow_mapicon {
  background-position: -220px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_5 .hc_map_infowindow_mapicon {
  background-position: -270px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_6 .hc_map_infowindow_mapicon {
  background-position: -320px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_7 .hc_map_infowindow_mapicon {
  background-position: -370px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_8 .hc_map_infowindow_mapicon {
  background-position: -420px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_9 .hc_map_infowindow_mapicon {
  background-position: -470px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_10 .hc_map_infowindow_mapicon {
  background-position: -520px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_11 .hc_map_infowindow_mapicon {
  background-position: -570px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_12 .hc_map_infowindow_mapicon {
  background-position: -620px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_13 .hc_map_infowindow_mapicon {
  background-position: -670px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_14 .hc_map_infowindow_mapicon {
  background-position: -720px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_15 .hc_map_infowindow_mapicon {
  background-position: -770px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_16 .hc_map_infowindow_mapicon {
  background-position: -820px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_17 .hc_map_infowindow_mapicon {
  background-position: -870px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_18 .hc_map_infowindow_mapicon {
  background-position: -920px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_19 .hc_map_infowindow_mapicon {
  background-position: -970px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_20 .hc_map_infowindow_mapicon {
  background-position: -1020px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_21 .hc_map_infowindow_mapicon {
  background-position: -1070px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_22 .hc_map_infowindow_mapicon {
  background-position: -1120px -89px;
}
.hc_map_infowindow_mainhotel.hc_map_infowindow_hotel_23 .hc_map_infowindow_mapicon {
  background-position: -1170px -89px;
}
/* legend */
#hc_map_full .hc_m_hd h2 {
  height: 40px;
  line-height: 30px;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
}
#hc_map_full .hc_m_hd p {
  background: #000;
  background: rgba(0, 0, 0, 0.7);
  padding: 4px 20px 4px 15px;
  -moz-border-radius: 0 0 2px 0;
  -webkit-border-radius: 0 0 2px 0;
  border-radius: 0 0 2px 0;
  float: left;
  height: 40px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #fff;
  font-size: 11px;
}
.hc_page_city #hc_map_full .hc_m_hd p {
  display: none;
}
.hc_rtl #hc_map_full .hc_m_hd p {
  padding-right: 15px;
  padding-left: 20px;
  -moz-border-radius: 0 0 0 2px;
  -webkit-border-radius: 0 0 0 2px;
  border-radius: 0 0 0 2px;
  float: right;
}
#hc_map_full .hc_m_hd p .hc_map_full_legend_keyvalue {
  display: block;
  line-height: 16px;
}
#hc_map_full .hc_m_hd p.hc_map_full_taxPreferences {
  max-width: 450px;
  position: relative;
  margin: 0 0 0 10px;
  padding: 5px 5px 5px 23px;
  font-size: 12px;
  text-align: left;
}
.hc_rtl #hc_map_full .hc_m_hd p.hc_map_full_taxPreferences {
  text-align: right;
  direction: rtl;
  padding-right: 23px;
  padding-left: 5px;
  margin: 0 10px 0 0;
}
#hc_map_full .hc_m_hd p.hc_map_full_taxPreferences .hc_map_full_taxPreferences_item:before {
  display: inline-block;
  width: 14px;
  height: 14px;
  position: absolute;
  top: 5px;
  left: 5px;
  font-family: "icons";
  content: '\e93c';
  font-size: 14px;
}
.hc_rtl #hc_map_full .hc_m_hd p.hc_map_full_taxPreferences .hc_map_full_taxPreferences_item:before {
  left: auto;
  right: 5px;
}
#hc_map_full .hc_m_hd p.hc_map_full_taxPreferences .hc_map_full_taxPreferences_item--exclude {
  line-height: 30px;
}
#hc_map_full .hc_m_hd p .hc_icon.hc_t_pins_marker {
  background: url(https://cdn.datahc.com/Content/Images/Desktop/Shared/Maps/map_pins_marker_legend.png?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) no-repeat 0 0;
  width: 10px;
  height: 13px;
  display: inline-block;
  position: relative;
  top: 2px;
  margin: 0 3px 0 0;
}
#hc_map_full .hc_m_hd p .hc_icon.hc_t_pins_marker:before {
  content: none;
}
.hc_rtl #hc_map_full .hc_m_hd p .hc_icon.hc_t_pins_marker {
  margin-left: 3px;
  margin-right: 0;
}
#hc_map_full .hc_m_hd p .hc_icon.hc_t_pins_circle {
  background: url(https://cdn.datahc.com/Content/Images/Desktop/Shared/Maps/map_pins_circle_legend.png?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) no-repeat 0 0;
  width: 10px;
  height: 11px;
  display: inline-block;
  position: relative;
  top: 2px;
  margin: 0 3px 0 0;
}
#hc_map_full .hc_m_hd p .hc_icon.hc_t_pins_circle:before {
  content: none;
}
.hc_rtl #hc_map_full .hc_m_hd p .hc_icon.hc_t_pins_circle {
  margin-left: 3px;
  margin-right: 0;
}
.hc_page_sr #hc_map_full,
.hc_page_city #hc_map_full {
  padding-bottom: 5px;
}
.hc_page_sr #hc_map_main_ft,
.hc_page_city #hc_map_main_ft {
  display: none;
}
.hc_page_sr .hc_map_infowindow_boundaryhotel .hc_map_infowindow_mapicon_container,
.hc_page_city .hc_map_infowindow_boundaryhotel .hc_map_infowindow_mapicon_container {
  position: absolute;
  top: 12px;
  left: 10px;
  width: 20px;
}
.hc_rtl.hc_page_sr .hc_map_infowindow_boundaryhotel .hc_map_infowindow_mapicon_container,
.hc_rtl.hc_page_city .hc_map_infowindow_boundaryhotel .hc_map_infowindow_mapicon_container {
  left: auto;
  right: 10px;
}
.hc_page_sr .hc_map_infowindow_boundaryhotel .hc_map_infowindow_mapicon,
.hc_page_city .hc_map_infowindow_boundaryhotel .hc_map_infowindow_mapicon {
  background-image: url(https://cdn.datahc.com/Images/Maps/map_pins.png?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38);
  width: 41px;
  height: 53px;
  background-position: -1370px -89px;
}
.hc_page_sr .hc_map_infowindow_mainhotel .hc_map_infowindow_mapicon,
.hc_page_city .hc_map_infowindow_mainhotel .hc_map_infowindow_mapicon {
  background-position: -1370px -89px;
}
/* --- end HC Common - Map --- */
/* HC Search progress bar */
#hc_sr_progress {
  position: relative;
  display: none;
  height: 25px;
  background: #f1f1f1;
  border: 2px solid #3caa87;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 0 0 10px;
}
#hc_sr_progress p {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  margin: 0;
  padding: 0 20px;
  color: #3caa87;
  font-size: 1.25em;
  line-height: 25px;
}
.hc_rtl #hc_sr_progress p {
  left: auto;
  right: 0;
}
#hc_sr_progress .hc_sr_progress_item {
  background-color: #3caa87;
  position: relative;
  z-index: 1;
  left: 0;
  width: 0;
  padding: 0;
  top: 0;
  font-size: 0;
  overflow: hidden;
}
.hc_rtl #hc_sr_progress .hc_sr_progress_item {
  float: right;
  clear: both;
}
/* loading results */
.hc_loadingResults {
  margin: 0;
  padding: 0;
  background: none;
  text-align: center;
}
.hc_page_hotel .hc_loadingResults {
  border-bottom: 1px solid #CCCCCC;
}
.hc_page_hotel .hc_loadingResults .b1h,
.hc_page_hotel .hc_loadingResults .b2h,
.hc_page_hotel .hc_loadingResults .b3h,
.hc_page_hotel .hc_loadingResults .b4h,
.hc_page_hotel .hc_loadingResults .b2bh,
.hc_page_hotel .hc_loadingResults .b3bh,
.hc_page_hotel .hc_loadingResults .b4bh {
  display: none;
}
.hc_page_hotel .hc_loadingResults .hc_m_outer {
  background: none;
  border-left: 0;
  border-right: 0;
}
.hc_loadingResults .hc_m_content,
#hc_htl_pm_rates .hc_loadingResults .hc_m_content {
  padding: 30px 0;
}
.hc_loadingResults .hc_e_spinner_v2 {
  text-align: center;
  width: 100px;
  height: 15px;
  background: url(https://cdn.datahc.com/Content/Images/Desktop/Whitelabel/hc_loadingBar.gif?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) no-repeat 0 0;
  margin: 10px auto 5px;
  padding: 0;
}
.hc_loadingResults p {
  text-align: center;
  font-size: 1.7em;
  color: #3caa87;
  padding: 10px 0 20px;
}
.hc_loadingResults ul {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
}
.hc_loadingResults ul li {
  font-size: 1.2em;
  list-style: none;
  text-align: left;
}
.hc_rtl .hc_loadingResults ul li {
  text-align: right;
}
.hc_loadingResults ul li .hc_icon {
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
}
.hc_sr_loadingSRIs.hc_e_spinner_v2 {
  height: 15px;
  background: url(https://cdn.datahc.com/Content/Images/Desktop/Whitelabel/hc_loadingBar.gif?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) no-repeat top right;
  padding: 0 0 5px;
  margin: 0 10px;
}
.hc_rtl .hc_sr_loadingSRIs.hc_e_spinner_v2 {
  background-position: top left;
}
.hc_htl_loadingPrices.hc_e_spinner_v2 {
  width: 100px;
  height: 15px;
  background: url(https://cdn.datahc.com/Content/Images/Desktop/Whitelabel/hc_loadingBar.gif?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) no-repeat 0 0;
  padding: 0;
  position: absolute;
  top: 13px;
  right: 10px;
}
.hc_rtl .hc_htl_loadingPrices.hc_e_spinner_v2 {
  right: auto;
  left: 10px;
}
.hc-pricepreferences {
  margin: -3px 1px -6px;
}
.hc-pricepreferences--search {
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  border: 1px solid #CCCCCC;
  margin: 0 0 7px;
  display: inline-block;
  float: right;
}
.hc_rtl .hc-pricepreferences--search {
  float: left;
}
.hc-pricepreferences--hotel {
  display: inline-block;
  white-space: nowrap;
  width: 100%;
}
.hc-pricepreferences__buttonlink {
  padding: 0 10px;
  display: block;
  line-height: 25px;
}
.hc-pricepreferences__buttonlink:after {
  display: inline-block;
  position: relative;
  top: -2px;
  font-family: "icons";
  content: "\e962";
  font-size: 0.6em;
  line-height: 10px;
  color: #669900;
  font-weight: bold;
  margin-left: 5px;
}
.hc_rtl .hc-pricepreferences__buttonlink:after {
  margin-left: 0;
  margin-right: 5px;
}
.hc-pricepreferences__buttonlink:hover:after,
.hc-pricepreferences__buttonlink:focus:after {
  color: #669900;
}
.hc-pricepreferences__buttonlink--tableheader {
  padding: 0;
  text-decoration: none;
}
.hc-pricepreferences__popover {
  min-width: 220px;
  max-width: 250px;
  border: 1px solid #ccc;
  border-top: 0;
}
.hc-pricepreferences__popover .hc_m_hd {
  display: none;
}
.hc-pricepreferences__popover .hc_m_outer {
  -moz-box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.25);
  box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.25);
}
.hc_rtl .hc-pricepreferences__popover .hc_m_outer {
  -moz-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
}
.hc-pricepreferences__popover .hc_m_content {
  padding: 0;
  -moz-box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.25);
  box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.25);
}
.hc_rtl .hc-pricepreferences__popover .hc_m_content {
  -moz-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
}
.hc-pricepreferences__list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.hc-pricepreferences__item {
  margin: 0;
  padding: 0;
  list-style: none;
}
.hc-pricepreferences__link {
  display: block;
  padding: 10px 25px 10px 10px;
  position: relative;
}
.hc_rtl .hc-pricepreferences__link {
  padding-left: 25px;
  padding-right: 10px;
}
.hc-pricepreferences__link:hover {
  background: #f4f4f4;
}
.hc-pricepreferences__link--selected:after {
  font-family: "icons";
  content: "\e807";
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.2em;
  font-weight: bold;
}
.hc_rtl .hc-pricepreferences__link--selected:after {
  right: auto;
  left: 10px;
}
.hc-bookwithhotel {
  display: inline-block;
  width: 130px;
  text-align: center;
}
.hc-bookwithhotel__link {
  border: 1px solid #669900;
  color: #669900;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 10px;
  line-height: 12px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  min-height: 30px;
  padding: 0 10px;
  text-decoration: none;
  display: -webkit-inline-flex;
  display: inline-flex;
  -webkit-align-items: center;
  align-items: center;
  cursor: pointer;
}
.hc-bookwithhotel__link:hover,
.hc-bookwithhotel__link:focus {
  color: #669900;
}
.hc-bookwithhotel__link:before {
  font-family: "icons";
  content: "\e958";
  color: #669900;
  display: inline-block;
  width: 20px;
  height: 20px;
  font-size: 16px;
  line-height: 16px;
  font-weight: normal;
  margin-right: 3px;
  text-align: left;
}
.hc_rtl.hc-bookwithhotel__link:before {
  margin-right: 0;
  margin-left: 3px;
  text-align: right;
}
.hc-guestratingsummary {
  padding: 0 0 0 70px;
  position: relative;
  min-height: 60px;
}
.hc_rtl .hc-guestratingsummary {
  padding-left: 0;
  padding-right: 70px;
}
.hc-guestratingsummary__link {
  text-decoration: none;
  color: #333333;
  cursor: pointer;
}
.hc-guestratingsummary__link:hover {
  text-decoration: none;
  color: #333333;
}
.hc-guestratingsummary svg {
  -moz-transform: rotate(270deg);
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
  position: absolute;
  top: 0;
  left: 0;
}
.hc_rtl .hc-guestratingsummary svg {
  left: auto;
  right: 0;
}
.hc-guestratingsummary:before {
  content: attr(content);
  color: #669900;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 0;
}
.hc_rtl .hc-guestratingsummary:before {
  left: auto;
  right: 0;
}
.hc-guestratingsummary__sentiment {
  margin: 0;
  padding: 7px 0 0;
  font-size: 22px;
  line-height: 28px;
  color: #669900;
}
.hc-guestratingsummary__numberofreviews {
  margin: 0;
  padding: 0;
}
.hc-guestratingsummary:hover + .hc-guestratingcontainer {
  visibility: visible;
  opacity: 1;
}
/* miscellaneous icons */
.hc_icon.hc_t_map:before,
.hc_t_map .hc_icon:before {
  background: url(https://cdn.datahc.com/Images/hc_aff_icons2.png?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) no-repeat 0 -19px;
  width: 35px;
  height: 36px;
}
/* item layout version 15 (e.g. popular hotels on search results) */
.hc_i_layout_v15 .hc_i_wrapper {
  float: left;
  width: 33%;
  min-width: 180px;
  max-width: 299px;
}
.hc_rtl .hc_i_layout_v15 .hc_i_wrapper {
  float: right;
}
.hc_i_layout_v15 .hc_i_wrapper:nth-of-type(3n+1) {
  clear: left;
}
.hc_rtl .hc_i_layout_v15 .hc_i_wrapper:nth-of-type(3n+1) {
  clear: right;
}
.hc_i_layout_v15 .hc_i {
  position: relative;
  margin: 0 10px 10px;
  padding: 0;
  height: 120px;
}
.hc_i_layout_v15 .hc_i h3 {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0;
  width: 100%;
  color: #fff;
  font-size: 1.4em;
  text-align: center;
  background: #333;
  background: rgba(0, 0, 0, 0.5);
}
.hc_rtl .hc_i_layout_v15 .hc_i h3 {
  left: auto;
  right: 0;
}
.hc_i_layout_v15 .hc_i h3 a {
  color: #fff;
  text-decoration: none;
  padding: 0 10px;
  display: block;
  font-weight: normal;
  min-height: 30px;
  line-height: 30px;
}
.hc_i_layout_v15 .hc_i:hover h3 a {
  color: #fff;
}
.hc_i_layout_v15 .hc_i a.hc_i_photo {
  width: auto;
  height: 120px;
  margin: 0 0 10px;
  padding: 0;
  border: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
  background-repeat: no-repeat;
  background-position: center center;
}
/* end item layout version 15 */
.hc_sr_theme {
  padding-left: 10px;
}
.hc_rtl .hc_sr_theme {
  padding-right: 10px;
}
/* search results title */
#hc_sr_dates {
  margin: 10px 0 5px;
}
#hc_sr_dates .b3bh,
#hc_sr_dates .b4bh,
#hc_sr_dates .hc_m_hd {
  display: none;
}
#hc_sr_dates .hc_m_content {
  padding: 0;
}
#hc_intro #hc_sr_dates p {
  padding: 0;
  display: inline;
  font-weight: bold;
}
.hc_rtl #hc_intro #hc_sr_dates p {
  float: right;
}
#hc_intro #hc_sr_dates .hc_f_btn_changeDates {
  padding-left: 10px;
  margin-left: 10px;
  border-left: 1px solid #999;
  font-weight: bold;
}
.hc_rtl #hc_intro #hc_sr_dates .hc_f_btn_changeDates {
  border-left: none;
  border-right: 1px solid #999;
  padding-left: 0;
  padding-right: 10px;
  margin-left: 0;
  margin-right: 10px;
}
.hc-maplinktop {
  display: inline-block;
  height: 40px;
  width: 193px;
  border: 1px solid #333333;
  position: absolute;
  right: 0;
  top: 0;
  color: #333333;
  font-family: 'Brezel Grotesk', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1.333em;
  font-weight: bold;
  text-decoration: none;
  line-height: 40px;
  background: url(https://cdn.datahc.com/Content/Images/Desktop/Main/open_map_background.png?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) no-repeat center center;
}
.hc_lang_en .hc-maplinktop {
  text-align: center;
}
.hc_lang_ko.hc-desktop--small .hc-maplinktop {
  width: 130px;
}
.hc_lang_ja.hc-desktop--small .hc-maplinktop {
  width: 170px;
}
.hc_rtl .hc-maplinktop {
  background: url(https://cdn.datahc.com/Content/Images/Desktop/Main/open_map_background_flipped.png?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) no-repeat center center;
  left: 0;
}
.hc-maplinktop:before {
  content: url(https://cdn.datahc.com/Content/Images/Desktop/Main/map_selected_pin_small.png?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38);
  position: absolute;
  width: 13px;
  height: 17px;
  line-height: 17px;
  top: -7px;
  left: 13px;
  transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  -o-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  -moz-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}
.hc_rtl .hc-maplinktop:before {
  left: auto;
  right: 13px;
}
.hc-maplinktop:hover:before,
.hc-maplinktop:focus:before,
.hc-maplinktop:active:before {
  transform: translateY(15px);
}
.hc-maplinktop__text {
  margin-left: 40px;
}
.hc_lang_en .hc-maplinktop__text {
  margin-left: 0px;
}
.hc_lang_fr .hc-maplinktop__text {
  margin-left: 30px;
}
.hc_rtl .hc-maplinktop__text {
  margin-left: auto;
  margin-right: 40px;
}
/* SR boundary filter */
.hc_sr_boundary {
  font-size: 1.2em;
}
/* low availability on search results */
.hc_lowAvail {
  margin: 10px 0;
  min-height: 145px;
}
.hc_lowAvail .hc_m_hd {
  padding: 10px 10px 0 142px;
}
.hc_rtl .hc_lowAvail .hc_m_hd {
  padding-left: 10px;
  padding-right: 142px;
}
.hc_lowAvail h2 {
  font-size: 1.7em;
  padding: 0 0 2px;
  margin: 0;
  font-weight: bold;
}
.hc_lowAvail h2 span {
  display: inline-block;
  color: #669a16;
}
.hc_lowAvail.hc_rating_1 h2 span {
  color: #669a16;
}
.hc_lowAvail.hc_rating_2 h2 span {
  color: #669a16;
}
.hc_lowAvail.hc_rating_3 h2 span {
  color: #ffc000;
}
.hc_lowAvail.hc_rating_4 h2 span {
  color: #ffc000;
}
.hc_lowAvail.hc_rating_5 h2 span {
  color: #d40000;
}
.hc_lowAvail .hc_m_content {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 10px 10px 142px;
}
.hc_rtl .hc_lowAvail .hc_m_content {
  padding-left: 10px;
  padding-right: 142px;
}
.hc_lowAvail_gauge {
  display: block;
  visibility: hidden;
  position: absolute;
  top: -20px;
  left: 10px;
  width: 122px;
  background: url(https://cdn.datahc.com/Images/hc_bg_lowavail_bar.png?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) no-repeat 0 0;
}
.hc_rtl .hc_lowAvail_gauge {
  left: auto;
  right: 10px;
}
.hc_lowAvail_canvas {
  display: block;
  visibility: hidden;
  padding: 0;
}
.hc_lowAvail p {
  font-size: 1.5em;
  color: #333333;
}
.hc_lowAvail .hc_lowAvail_otherDates {
  background: #eee;
  display: block;
  padding: 0 10px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}
.hc_lowAvail h3 {
  display: block;
  float: left;
  width: 25%;
  font-size: 1.2em;
  padding: 22px 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.hc_rtl .hc_lowAvail h3 {
  float: right;
}
.hc_lowAvail table {
  margin: 0;
  padding: 0;
  float: left;
  width: 75%;
}
.hc_rtl .hc_lowAvail table {
  float: right;
}
.hc_lowAvail table th {
  margin: 0;
  padding: 0;
}
.hc_lowAvail table th a {
  display: block;
  padding: 15px 5px 5px;
  text-align: left;
  text-decoration: none;
  color: #669900;
  font-size: 1.2em;
  font-weight: bold;
}
.hc_rtl .hc_lowAvail table th a {
  text-align: right;
}
.hc_lowAvail table td {
  margin: 0;
  padding: 0;
}
.hc_lowAvail table td a {
  display: block;
  padding: 0 5px 15px;
  text-align: left;
  text-decoration: none;
  color: #333333;
}
.hc_rtl .hc_lowAvail table td a {
  text-align: right;
}
/* popular destinations on search results */
#hc_sr_popularDests h2 {
  font-size: 1.8em;
}
#hc_sr_popularDests .hc_m_content {
  padding: 0 0 5px;
}
#hc_sr_popularDests .hc_m_content p {
  padding: 10px;
  font-size: 1.4em;
}
/** FILTERS **/
#hc_refinePrices {
  position: relative;
  width: 100%;
  padding-bottom: 0;
  margin-bottom: 15px;
}
#hc_refinePrices h2 {
  color: #333333;
}
#hc_refinePrices .hc_m_hd {
  background-color: #FFFFFF;
  border: #FFFFFF;
}
#hc_refinePrices .hc_m_hd h2 {
  font-size: 1.3em;
}
#hc_refinePrices .hc_m_content {
  *display: inline-block;
  padding-top: 0;
  border: none;
  background-color: #FFFFFF;
}
#hc_refinePrices ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
#hc_refinePrices ul li {
  list-style: none;
  padding: 2px 0;
  margin: 0;
  float: none;
}
#hc_refinePrices .hc_filter .hc_m_content {
  margin-top: 0;
  background: #FFFFFF;
}
#hc_refinePrices .hc_f_btn_resetFilters {
  margin-top: 10px;
}
#hc_refinePrices #hc_filter_name {
  width: inherit;
  overflow: hidden;
}
#hc_refinePrices .hc_f_btnWrap {
  padding-top: 10px;
  text-align: center;
  border-top: none;
}
#hc_refinePrices .b2h,
#hc_refinePrices .b3h,
#hc_refinePrices .b4h,
#hc_refinePrices .b2bh,
#hc_refinePrices .b3bh,
#hc_refinePrices .b4bh {
  background-color: #FFFFFF;
}
#hc_refinePrices .hc_m_outer {
  padding-left: 0;
  padding-right: 0;
}
.hc_filter {
  display: inline-block;
}
.hc_filter {
  display: block;
  padding: 0 0 10px;
  margin: 0;
  border-bottom: 2px solid #CCCCCC;
}
.hc_filter .hc_m_hd {
  padding: 10px 0 5px;
  margin: 0;
  background: #fff;
  border: none;
}
.hc_filter .hc_m_hd h3 {
  padding-bottom: 0;
  font-size: 1em;
  font-weight: bold;
  text-align: left;
}
.hc_rtl .hc_filter .hc_m_hd h3 {
  text-align: right;
}
.hc_filter .hc_m_hd h3 a {
  position: relative;
  min-height: 1.5em;
  height: auto!important;
  height: 1.5em;
  display: block;
  padding: 2px 0 0 20px !important;
  text-shadow: none;
  text-decoration: none!important;
  text-transform: none!important;
}
.hc_rtl .hc_filter .hc_m_hd h3 a {
  padding-left: 0!important;
  padding-right: 20px!important;
}
.hc_filter .hc_m_hd h3 a:hover {
  text-decoration: underline!important;
}
.hc_filter .hc_m_hd h3 a .hc_icon {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
}
.hc_rtl .hc_filter .hc_m_hd h3 a .hc_icon {
  left: auto;
  right: 0;
}
.hc_filter .hc_m_content {
  padding: 0;
  margin: 5px 0;
  display: block;
}
.hc_rtl .hc_filter .hc_m_content {
  direction: rtl;
}
.hc_filter label {
  font-size: 0.9em;
}
.hc_filter label:hover {
  cursor: pointer;
}
.hc_filter .hc_e_numHtls {
  color: #999;
}
.hc_filter .hc_selected .hc_e_numHtls {
  color: #333333;
  font-weight: normal;
}
.hc_filter .hc_filter_moreLink a {
  font-weight: bold;
}
.hc_filter .hc_f_t_cb {
  padding: 0 5px;
  border-bottom: 1px solid #eee;
  position: relative;
  overflow: hidden;
}
.hc_filter .hc_f_t_cb label {
  display: block;
  padding: 9px 30px 5px 20px;
}
.hc_d_touch .hc_filter .hc_f_t_cb label {
  padding-left: 25px;
}
.hc_rtl .hc_d_touch .hc_filter .hc_f_t_cb label {
  padding-right: 25px;
}
.hc_rtl .hc_filter .hc_f_t_cb label {
  padding-left: 30px;
  padding-right: 20px;
}
.hc_filter .hc_f_t_cb input {
  display: block;
  position: absolute;
  margin-top: 8px;
}
.hc_filter .hc_f_t_cb .hc_e_numHtls {
  display: block;
  position: absolute;
  right: 5px;
  top: 9px;
}
.hc_rtl .hc_filter .hc_f_t_cb .hc_e_numHtls {
  left: 5px;
  right: auto;
}
.hc_filter .hc_f_t_cb.hc_disabled {
  -moz-opacity: 1;
  -khtml-opacity: 1;
  -webkit-opacity: 1;
  opacity: 1;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=100);
  filter: alpha(opacity=100);
  cursor: default;
}
.hc_filter .hc_f_t_cb.hc_disabled label,
.hc_filter .hc_f_t_cb.hc_disabled label span {
  cursor: default!important;
  color: #999;
}
.hc_filter .hc_f_t_cb.hc_hover,
.hc_filter .hc_f_t_cb.hc_selected {
  background: #f4f4f4;
  cursor: pointer;
}
.hc_filter .hc_f_t_cb.hc_selected {
  background: #f4f4f4;
  font-weight: bold;
}
.hc_filter .hc_f_t_cb.hc_selected label {
  font-weight: bold;
}
/* hotel location filter */
#hc_filter_location .hc_m_content {
  padding: 0 5px 10px;
}
#hc_filter_location h4 {
  padding: 5px;
  margin: 7px 0 0;
  border-bottom: 1px solid #eee;
  font-size: 1.05em;
}
#hc_filter_location ul li {
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #eee;
}
#hc_filter_location ul li a {
  display: inline-block;
}
#hc_filter_location ul li a {
  display: block;
  padding: 5px;
}
#hc_filter_location ul li a:hover {
  background: #f4f4f4;
}
.hc_d_tablet #hc_filter_location ul li a:hover {
  background: transparent;
  color: #669900;
}
#hc_filter_location .hc_filter_list_link_all,
#hc_filter_location .hc_filter_list_link {
  font-size: 0.9em;
  padding: 10px 5px 0;
  display: block;
  text-align: right;
}
.hc_rtl #hc_filter_location .hc_filter_list_link_all,
.hc_rtl #hc_filter_location .hc_filter_list_link {
  text-align: left;
}
/* filter location all */
.hc_filter_location_all {
  display: block;
}
#hc_filter_location .hc_filter_location_all {
  display: none;
}
/* filter location summary */
.hc_filter_location_summary {
  display: block;
}
#hc_filter_location .hc_filter_location_summary {
  padding-top: 2px;
}
#hc_filter_hotelRating label {
  padding-top: 5px;
}
/* hotel rating filter */
#hc_filter_hotelRating label > span:first-child {
  font-size: 1.25em;
  line-height: 1.6em;
  display: inline-block;
}
#hc_filter_hotelRating .hc_f_filter_hotelRating_star5 {
  border-bottom: none;
}
#hc_filter_hotelRating label span span {
  display: inline;
  color: inherit;
  position: relative;
  right: auto;
  top: auto;
}
.hc_rtl #hc_filter_hotelRating label span span {
  left: auto;
}
/* hotel name filter */
#hc_filter_name .hc_m_content {
  padding: 10px 5px;
}
#hc_filter_name .hc_f_t_i {
  padding-bottom: 5px;
}
#hc_filter_name .hc_selected input {
  background: #f4f4f4;
  font-weight: bold;
}
#hc_filter_name .hc_f_btn_reset {
  float: left;
  padding-right: 0;
  font-size: 0.9em;
}
.hc_rtl #hc_filter_name .hc_f_btn_reset {
  float: right;
}
#hc_filter_name .hc_f_btn_submit {
  float: right;
  padding-right: 10px;
}
.hc_rtl #hc_filter_name .hc_f_btn_submit {
  float: left;
}
.hc_rtl #hc_filter_name .cDivRight {
  clear: left;
}
/* hotel facilities filter */
#hc_filter_facilities .hc_scroll {
  display: block;
  position: relative;
  overflow: auto;
  border: 1px solid #ccc;
}
#hc_filter_facilities #hc_filter_facilities_link_all,
#hc_filter_facilities #hc_filter_facilities_link {
  font-size: 0.9em;
  padding: 5px 5px 0;
  display: block;
}
.hc_filter_facilities_resetWrap {
  text-align: center;
}
#hc_filter_facilities_reset {
  margin: 10px 0 0 -10px;
}
.hc_rtl #hc_filter_facilities_reset {
  margin-right: -10px;
  margin-left: 0;
}
/* hotel chains filter */
#hc_filter_chains .hc_scroll {
  display: block;
  position: relative;
  overflow: auto;
  border: 1px solid #ccc;
}
#hc_filter_chains .hc_filter_chains_link_more,
#hc_filter_chains .hc_filter_chains_link_less {
  font-size: 0.9em;
  padding: 10px 5px 0;
  display: block;
}
#hc_sr_expand_desc {
  padding: 10px;
  margin: 0;
}
#hc_sr_expand_desc a {
  margin-left: 5px;
}
.hc_rtl #hc_sr_expand_desc a {
  margin-left: 0;
  margin-right: 5px;
}
#hc_sr_expand_desc em {
  font-style: normal;
  font-weight: bold;
}
.hc_filter_expand_dist,
.hc_filter_expand_nb {
  padding: 0;
  border: 0;
}
.hc_filter_expand_dist .hc_m_content,
.hc_filter_expand_nb .hc_m_content {
  padding: 10px!important;
  margin: 5px 0;
  background: #fff;
  border: 1px solid #CCCCCC;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  display: block;
}
.hc_rtl .hc_filter_expand_dist .hc_m_content,
.hc_rtl .hc_filter_expand_nb .hc_m_content {
  direction: rtl;
}
.hc_filter_expand_dist .hc_m_hd,
.hc_filter_expand_nb .hc_m_hd {
  padding-top: 5px;
}
.hc_filter_expand_dist .hc_m_hd h3,
.hc_filter_expand_nb .hc_m_hd h3 {
  padding-top: 0;
}
#hc_sr_expand_top.hc_m_v12 .hc_m_content,
#hc_sr_expand.hc_m_v12 .hc_m_content {
  padding-bottom: 10px;
}
#hc_sr_expand_top.hc_m_v12 .hc_m_hd h2,
#hc_sr_expand.hc_m_v12 .hc_m_hd h2 {
  text-align: left;
  padding: 8px 0 10px;
}
.hc_rtl #hc_sr_expand_top.hc_m_v12 .hc_m_hd h2,
.hc_rtl #hc_sr_expand.hc_m_v12 .hc_m_hd h2 {
  text-align: right;
}
#hc_sr_expand_top .hc_m_hd {
  display: none;
}
#hc_sr_expand_top .hc_filter_expand_dist .hc_m_content {
  margin: 0;
}
#hc_sr_expand h3 {
  font-size: 1em;
  font-weight: normal;
}
.hc_filter_expand_dist ul {
  display: block;
  *display: inline-block;
  margin: 0 0 -10px;
  *margin-bottom: 0;
  padding: 0;
}
.hc_filter_expand_dist ul li {
  display: block;
  position: relative;
  float: left;
  list-style: none!important;
  margin: 0 15px 10px 0;
  padding: 0;
  width: 115px;
  border-right: 1px solid #CCCCCC;
}
.hc_lang_ru .hc_filter_expand_dist ul li,
.hc_lang_ko .hc_filter_expand_dist ul li {
  width: 140px;
}
.hc_lang_el .hc_filter_expand_dist ul li {
  width: 180px;
}
.hc_rtl .hc_filter_expand_dist ul li {
  margin-right: 0;
  margin-left: 15px;
  float: right;
  border-right: none;
  border-left: 1px solid #CCCCCC;
}
.hc_filter_expand_dist ul li.hc_last {
  border: none;
}
.hc_filter_expand_dist ul li.hc_more {
  font-weight: bold;
}
.hc_filter_expand_dist ul li span {
  display: block;
  position: absolute;
  right: 15px;
  top: 1px;
  font-size: 0.95em;
  color: #666;
}
.hc_rtl .hc_filter_expand_dist ul li span {
  right: auto;
  left: 15px;
}
/* top places */
.hc_filter_expand_nb ul {
  display: block;
  *display: inline-block;
  margin: 0 0 -10px;
  *margin-bottom: 0;
  padding: 0;
}
.hc_filter_expand_nb ul li {
  display: block;
  position: relative;
  float: left;
  list-style: none!important;
  margin: 0 15px 10px 0;
  padding: 0 70px 0 0;
  width: 200px;
  border-right: 1px solid #CCCCCC;
}
.hc_rtl .hc_filter_expand_nb ul li {
  margin-right: 0;
  margin-left: 15px;
  padding-right: 0;
  padding-left: 50px;
  float: right;
  border-right: none;
  border-left: 1px solid #CCCCCC;
}
.hc_filter_expand_nb ul li.hc_last {
  border: none;
}
.hc_filter_expand_nb ul li.hc_more {
  font-weight: bold;
}
.hc_filter_expand_nb ul li .hc_e_numHtls {
  display: block;
  position: absolute;
  right: 15px;
  top: 1px;
  font-size: 0.95em;
  color: #666;
}
.hc_rtl .hc_filter_expand_nb ul li .hc_e_numHtls {
  right: auto;
  left: 15px;
}
/** END: FILTERS **/
#hc_sr .hc_sr_selected {
  background: #f4f4f4;
  margin: 0 0 10px;
  padding: 15px;
  color: #333333;
  font-size: 1.4em;
}
#hc_sr .hc_tbl_col_2 img {
  padding-top: 1px;
  margin-right: 10px;
}
/*** SRIs ***/
.hc_sr_summary {
  padding-top: 0;
  position: relative;
}
.hc_sr_summary .hc_sri {
  position: relative;
  display: block;
  width: 100%;
  background: #fff;
  margin-bottom: 0;
}
.hc_sr_summary .hc_sri .hc_m_hd {
  display: none;
}
.hc_sr_summary .hc_sri .hc_m_outer {
  padding-bottom: 0;
}
.hc_sr_summary .hc_sri .hc_m_content {
  display: block;
  padding: 10px;
}
.hc_page_city .hc_sr_summary .hc_sri .hc_m_content {
  padding: 0;
}
.hc-sortingoverlay {
  background: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100%;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}
/* default hotel styles */
.hc_hotel a {
  text-decoration: none;
}
.hc_hotel a:hover {
  color: #669900;
  text-decoration: underline;
}
.hc_hotel h3 a {
  color: #333333;
}
.hc_hotel h3 a:hover {
  color: #669900;
}
.hc_hotel h3 .hc_hotel_transliteratedName {
  font-size: 0.75em;
}
.hc_hotel p {
  padding-bottom: 0;
}
.hc_hotel .hc_pr_syb {
  font-size: 1em;
}
.hc_hotel .hc-hotelrating {
  height: 15px;
  white-space: nowrap;
  margin: 0 1px;
}
.hc_hotel .hc_hotel_location {
  color: #333333;
}
.hc_hotel .hc_hotel_photo {
  display: block;
  overflow: hidden;
  position: relative;
  width: 134px;
  height: 134px;
}
.hc_hotel .hc_hotel_photo img {
  clip: rect(0 134px 134px 0);
  position: absolute;
  top: 0;
  left: 0;
}
.hc_hotel .hc_hotel_photos ul {
  margin: 0;
  padding: 0;
}
.hc_hotel .hc_hotel_photos ul li {
  position: relative;
  display: block;
  float: left;
  overflow: hidden;
  width: 40px;
  height: 40px;
  margin: 0 5px 5px 0;
  padding: 0;
  list-style: none;
}
.hc_rtl .hc_hotel .hc_hotel_photos ul li {
  float: right;
  margin-left: 5px;
  margin-right: 0;
}
.hc_hotel .hc_hotel_photos ul li a {
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  overflow: hidden;
}
.hc_hotel .hc_hotel_photos ul li a img {
  position: absolute;
  top: 0;
  left: 0;
}
.hc_hotel .hc_hotel_photos ul li.hc_hotel_photos_0 img {
  left: -222px;
}
.hc_hotel .hc_hotel_photos ul li.hc_hotel_photos_1 img {
  left: -262px;
}
.hc_hotel .hc_hotel_photos ul li.hc_hotel_photos_2 img {
  left: -302px;
}
.hc_hotel .hc_hotel_photos ul li.hc_hotel_photos_3 img {
  left: -342px;
}
.hc_hotel .hc_hotel_photos ul li.hc_hotel_photos_4 img {
  left: -382px;
}
.hc_hotel .hc_hotel_photos ul li.hc_hotel_photos_5 img {
  left: -422px;
}
.hc_hotel .hc_hotel_photos ul li.hc_hotel_photos_6 img {
  left: -462px;
}
.hc_hotel .hc_hotel_photos ul li.hc_hotel_photos_7 img {
  left: -502px;
}
.hc_hotel .hc_hotel_photos ul li.hc_hotel_photos_8 img {
  left: -542px;
}
.hc_hotel .hc_hotel_photos ul li.hc_hotel_photos_9 img {
  left: -582px;
}
.hc_hotel .hc_hotel_photos ul li.hc_hotel_photos_10 img {
  left: -622px;
}
.hc_hotel .hc_hotel_photos ul li.hc_hotel_photos_11 img {
  left: -662px;
}
.hc_hotel .hc_hotel_photos ul li.hc_hotel_photos_12 img {
  left: -702px;
}
.hc_hotel .hc_hotel_photos ul li.hc_hotel_photos_13 img {
  left: -742px;
}
.hc_hotel .hc_hotel_photos ul li.hc_hotel_photos_14 img {
  left: -782px;
}
.hc_hotel .hc_hotel_photos ul li.hc_hotel_photos_15 img {
  left: -822px;
}
.hc_hotel .hc_hotel_photos ul li.hc_hotel_photos_16 img {
  left: -862px;
}
.hc_hotel .hc_hotel_userRating {
  font-size: 1.2em;
  font-weight: bold;
  white-space: nowrap;
}
.hc_hotel .hc_hotel_userRating a {
  color: #669900;
}
.hc_hotel .hc_hotel_numberOfReviews {
  color: #333333;
  font-size: 0.9em;
  line-height: 20px;
}
.hc_hotel .hc_hotel_numberOfReviews span {
  font-weight: bold;
}
.hc_hotel .hc_hotel_wasPrice {
  color: #B80000;
  display: inline-block;
  padding: 0 5px;
  font-size: 1.2em;
  font-weight: bold;
  position: relative;
}
.hc_m_v4 .hc_hotel .hc_hotel_wasPrice {
  display: inline-block;
  padding: 0 5px;
}
.hc_hotel .hc_hotel_wasPrice:before {
  border-top: 1px solid #c00;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  content: "";
}
.hc_hotel .hc_hotel_wasPrice .hc_pr_from,
.hc_hotel .hc_hotel_wasPrice .hc_pr_reduced,
.hc_hotel .hc_hotel_wasPrice .hc_pr_cur {
  font-size: 0.8em;
}
.hc_hotel .hc_hotel_price {
  color: #669900;
  font-size: 2.6em;
  line-height: 1em;
}
.hc_hotel .hc_hotel_price .hc_pr_from,
.hc_hotel .hc_hotel_price .hc_pr_reduced,
.hc_hotel .hc_hotel_price .hc_pr_cur {
  font-size: 0.55em;
}
.hc_hotel .hc_hotel_numberOfNights {
  color: #333333;
}
.hc_hotel .hc_hotel_latestBooking {
  color: #333333;
  font-size: 0.9em;
}
.hc_hotel .hc_hotel_latestBooking span {
  color: #669900;
  font-weight: normal;
}
.hc_hotel .hc_hotel_removeItem {
  text-decoration: none;
  font-size: 0.95em;
}
.hc_hotel .hc_hotel_removeItem:hover {
  text-decoration: none;
}
.hc_hotel .hc_hotel_removeItem span {
  display: none;
}
.hc_hotel .hc_hotel_removeItem .hc_icon {
  display: block;
  width: 13px;
  height: 13px;
  color: #ccc;
}
.hc_hotel .hc_hotel_removeItem:hover .hc_icon {
  color: #c00;
}
/* generic hotel result */
.hc_hotel_result {
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  padding: 10px 260px 10px 110px;
  min-height: 134px;
  position: relative;
}
.hc_rtl .hc_hotel_result {
  padding-left: 260px;
  padding-right: 110px;
  direction: rtl;
}
.hc_hotel_result h3 {
  display: inline;
  font-size: 1.5em;
  font-weight: normal;
  padding: 0;
}
.hc_hotel_result .hc-hotelrating {
  display: inline-block;
  top: -2px;
  margin-left: 5px;
  width: 80px;
}
.hc_rtl .hc_hotel_result .hc-hotelrating {
  margin-left: 0;
  margin-right: 5px;
}
.hc_hotel_result .hc_hotel_location,
.hc_hotel_result .hc_hotel_map {
  float: left;
  padding: 5px 5px 0 0;
}
.hc_rtl .hc_hotel_result .hc_hotel_location,
.hc_rtl .hc_hotel_result .hc_hotel_map {
  float: right;
  padding-right: 0;
  padding-left: 5px;
}
.hc_hotel_result .hc_hotel_photo {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 90px;
  height: 90px;
}
.hc_rtl .hc_hotel_result .hc_hotel_photo {
  left: auto;
  right: 10px;
}
.hc_hotel_result .hc_hotel_photo img {
  clip: rect(0 222px 88px 134px);
  left: -134px;
}
.hc_hotel_result .hc_hotel_photos {
  height: 40px;
  overflow: hidden;
  margin-top: 15px;
}
.hc_hotel_result_highlights {
  width: 80px;
  position: absolute;
  top: 10px;
  right: 180px;
  min-height: 134px;
  text-align: right;
}
.hc_rtl .hc_hotel_result_highlights {
  right: auto;
  left: 180px;
  text-align: left;
}
.hc_hotel_result .hc_hotel_userRating {
  white-space: normal;
}
.hc_hotel_result .hc_hotel_numberOfReviews {
  padding-top: 3px;
  line-height: 12px;
  margin-bottom: 10px;
}
.hc_hotel_result .hc_hotel_latestBooking {
  position: absolute;
  bottom: 0;
  right: 0;
}
.hc_rtl .hc_hotel_result .hc_hotel_latestBooking {
  right: auto;
  left: 0;
}
.hc_hotel_result_promotedPrice {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 150px;
  padding-left: 10px;
  border-left: 1px solid #CCCCCC;
  min-height: 134px;
  text-align: center;
}
.hc_rtl .hc_hotel_result_promotedPrice {
  right: auto;
  left: 10px;
  padding-left: 0;
  padding-right: 10px;
  border-left: 0;
  border-right: 1px solid #CCCCCC;
}
.hc_hotel_result .hc_f_viewDealButton {
  margin-top: 15px;
  display: inline-block;
  min-width: 120px;
}
.hc_lang_bg .hc_hotel_result .hc_f_viewDealButton a,
.hc_lang_ca .hc_hotel_result .hc_f_viewDealButton a,
.hc_lang_lt .hc_hotel_result .hc_f_viewDealButton a {
  font-size: 1.3em;
}
.hc_lang_de .hc_hotel_result .hc_f_viewDealButton a,
.hc_lang_tr .hc_hotel_result .hc_f_viewDealButton a,
.hc_lang_ja .hc_hotel_result .hc_f_viewDealButton a,
.hc_lang_lv .hc_hotel_result .hc_f_viewDealButton a {
  font-size: 1.2em;
}
.hc_lang_el .hc_hotel_result .hc_f_viewDealButton a,
.hc_lang_ru .hc_hotel_result .hc_f_viewDealButton a,
.hc_lang_hu .hc_hotel_result .hc_f_viewDealButton a,
.hc_lang_ta .hc_hotel_result .hc_f_viewDealButton a,
.hc_lang_uk .hc_hotel_result .hc_f_viewDealButton a {
  font-size: 1em;
}
/* SRIs (no dates) */
.hc_srinodates_result .hc_hotel_remove {
  color: #ccc;
  display: inline-block;
  padding: 0;
  text-decoration: none;
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 1.5em;
}
.hc_rtl .hc_srinodates_result .hc_hotel_remove {
  right: auto;
  left: 5px;
}
.hc_srinodates_result .hc_hotel_remove:hover {
  text-decoration: none;
  color: #B80000;
  border-color: #B80000;
}
.hc_srinodates_result .hc_f_viewDealButton {
  margin-top: 45px;
}
/*** end: SRIs ***/
/* hc_changeSearch */
#hc_changeSearch .hc_m_hd h2 {
  text-align: left;
  font-size: 1.4em;
}
.hc_rtl #hc_changeSearch .hc_m_hd h2 {
  text-align: right;
}
#hc_changeSearch .hc_m_content {
  padding: 20px;
}
#hc_changeSearch .hc_m_close {
  color: #669900;
  right: 20px;
  top: 20px;
  font-size: 1.1em;
}
.hc_rtl #hc_changeSearch .hc_m_close {
  right: auto;
  left: 20px;
}
#hc_changeSearch fieldset {
  max-width: 550px;
}
.hc_rtl #hc_changeSearch fieldset {
  float: right;
}
#hc_changeSearch .hc_f_checkin,
#hc_changeSearch .hc_f_checkout {
  float: left;
}
.hc_rtl #hc_changeSearch .hc_f_checkin,
.hc_rtl #hc_changeSearch .hc_f_checkout {
  float: right;
}
#hc_changeSearch .hc_f_checkin {
  margin-right: 20px;
}
.hc_rtl #hc_changeSearch .hc_f_checkin {
  margin-right: 0;
  margin-left: 20px;
}
#hc_changeSearch .hc_f_noDates {
  clear: left;
}
.hc_rtl #hc_changeSearch .hc_f_noDates {
  clear: right;
}
#hc_changeSearch .hc_f_guestsRooms {
  float: left;
  margin-right: 10px;
  min-width: 255px;
}
.hc_rtl #hc_changeSearch .hc_f_guestsRooms {
  float: right;
  margin-right: 0;
  margin-left: 10px;
}
#hc_changeSearch .hc_f_roomConfig {
  margin-top: -5px;
}
#hc_changeSearch .hc_f_submit {
  float: right;
  padding-top: 15px;
}
.hc_rtl #hc_changeSearch .hc_f_submit {
  float: left;
}
#hc_changeSearch .hc_f_roomConfig p.hc_f_error {
  margin: 5px 5px 0;
}
/* end: hc_changeSearch */
/* inline search box */
.hc_sri_search .hc_m_hd {
  padding-left: 10px;
  padding-right: 10px;
}
.hc_sri_search .hc_m_hd h2 {
  text-align: left;
  font-size: 1.4em;
}
.hc_rtl .hc_sri_search .hc_m_hd h2 {
  text-align: right;
}
.hc_sri_search .hc_m_content {
  padding: 20px;
  position: relative;
  background-image: none;
}
.hc_sri_search .hc_m_close {
  position: absolute;
  top: -25px;
  right: 10px;
}
.hc_rtl .hc_sri_search .hc_m_close {
  right: auto;
  left: 10px;
}
.hc_sri_search .hc_f_checkin,
.hc_sri_search .hc_f_checkout {
  float: left;
  margin-right: 20px;
}
.hc_rtl .hc_sri_search .hc_f_checkin,
.hc_rtl .hc_sri_search .hc_f_checkout {
  float: right;
  margin-right: 0;
  margin-left: 20px;
}
.hc_sri_search .hc_f_noDates,
.hc_sri_search .hc_f_guestsRooms {
  width: 255px;
  float: left;
}
.hc_rtl .hc_sri_search .hc_f_noDates,
.hc_rtl .hc_sri_search .hc_f_guestsRooms {
  float: right;
}
.hc_sri_search .hc_f_roomConfig {
  margin-bottom: 20px;
  margin-top: -5px;
}
.hc_sri_search .hc_f_submit {
  float: left;
  display: inline-block;
  width: auto;
  padding-top: 8px;
}
.hc_rtl .hc_sri_search .hc_f_submit {
  float: right;
}
.hc_sri_search .hc_f_roomConfig p.hc_f_error {
  margin: 5px 5px 0;
}
.hc_sri_search .hc_bpg_link {
  float: left;
  line-height: 35px;
}
.hc_rtl .hc_sri_search .hc_bpg_link {
  float: right;
}
/* end: inline search box */
/***** PLACE DISAMBIGUATION PAGE STYLES ******/
/* sort bar */
.hc-sortbar {
  display: block;
  background: #fff;
  border: 1px solid #CCCCCC;
  border-radius: 2px;
  padding: 15px 5px;
  margin-bottom: 10px;
}
.hc-sortbar__heading {
  font-size: 21px;
  line-height: 24px;
  vertical-align: middle;
  margin: 0;
  padding: 0 20px 0 15px;
  float: left;
}
.hc_rtl .hc-sortbar__heading {
  padding-left: 20px;
  padding-right: 15px;
  float: right;
}
.hc_rtl .hc-sortbar {
  direction: rtl;
}
.hc-sortoptions {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
}
.hc-sortoptions__item {
  margin: 0;
  padding: 5px 0;
  list-style: none;
  float: left;
}
.hc_rtl .hc-sortoptions__item {
  float: right;
}
.hc-sortoptions__itemlink {
  display: inline-block;
  margin: 0;
  padding: 0 15px;
  font-size: 15px;
  line-height: 15px;
  -moz-box-shadow: inset 1px 0 0 0 #CCCCCC;
  -webkit-box-shadow: inset 1px 0 0 0 #CCCCCC;
  box-shadow: inset 1px 0 0 0 #CCCCCC;
  text-decoration: none;
  color: #333333;
  position: relative;
}
.hc_rtl .hc-sortoptions__itemlink {
  -moz-box-shadow: inset -1px 0 0 0 #CCCCCC;
  -webkit-box-shadow: inset -1px 0 0 0 #CCCCCC;
  box-shadow: inset -1px 0 0 0 #CCCCCC;
}
.hc-sortoptions__itemlink:hover {
  color: #669900;
  text-decoration: none;
}
.hc-sortoptions__itemlink:active {
  color: #669900;
  font-weight: normal;
}
.hc-sortoptions__itemlink--selected,
.hc-sortoptions__itemlink--selected:focus {
  color: #669900;
  text-decoration: none;
  font-weight: bold;
}
.hc-sortoptions__itemlink:before {
  content: "";
  width: 14px;
  height: 15px;
  line-height: 15px;
  display: inline-block;
  position: relative;
  top: -2px;
  margin-right: 5px;
  vertical-align: middle;
  font-weight: normal;
  padding-left: 1px;
}
.hc_rtl .hc-sortoptions__itemlink:before {
  margin-right: 0;
  margin-left: 5px;
  padding-right: 1px;
  padding-left: 0px;
}
.hc-sortoptions__itemlink--recommended:before {
  font-family: "icons";
  content: "\e95d";
}
.hc-sortoptions__itemlink--recommended:hover:before,
.hc-sortoptions__itemlink--recommended.hc-sortoptions__itemlink--selected:before {
  font-family: "icons";
  content: "\e95c";
}
.hc-sortoptions__itemlink--price:before {
  font-family: "icons";
  content: "\e957";
}
.hc-sortoptions__itemlink--stars:before {
  font-family: "icons";
  content: "\e954";
}
.hc-sortoptions__itemlink--stars:hover:before,
.hc-sortoptions__itemlink--stars.hc-sortoptions__itemlink--selected:before {
  font-family: "icons";
  content: "\e955";
}
.hc-sortoptions__itemlink--hotelclass:before {
  font-family: "icons";
  content: "\e94a";
}
.hc-sortoptions__itemlink--hotelclass:hover:before,
.hc-sortoptions__itemlink--hotelclass.hc-sortoptions__itemlink--selected:before {
  font-family: "icons";
  content: "\e949";
}
.hc-sortoptions__itemlink--guestrating:before {
  font-family: "icons";
  content: "\e95b";
}
.hc-sortoptions__itemlink--guestrating:hover:before,
.hc-sortoptions__itemlink--guestrating.hc-sortoptions__itemlink--selected:before {
  font-family: "icons";
  content: "\e95a";
}
.hc-sortoptions__itemlink:after {
  color: #669900;
  font-size: 19px;
  position: relative;
  vertical-align: middle;
  top: -2px;
  font-weight: normal;
  padding-left: 5px;
}
.hc_rtl .hc-sortoptions__itemlink:after {
  padding-left: 0;
  padding-right: 5px;
}
.hc-sortoptions__itemlink--ascending:after {
  font-family: "icons";
  content: "\e92d";
}
.hc-sortoptions__itemlink--ascending.hc-sortoptions__itemlink--recommended:after,
.hc-sortoptions__itemlink--ascending.hc-sortoptions__itemlink--guestrating:after {
  display: none;
}
.hc-sortoptions__itemlink--descending:after {
  font-family: "icons";
  content: "\e92c";
}
.hc-sortoptions__itemlink--descending.hc-sortoptions__itemlink--recommended:after,
.hc-sortoptions__itemlink--descending.hc-sortoptions__itemlink--guestrating:after {
  display: none;
}
.hc-sortoptions__loading {
  display: block;
  width: 19px;
  height: 15px;
  position: absolute;
  bottom: 2px;
  left: 15px;
  background: #fff;
}
.hc_rtl .hc-sortoptions__loading {
  left: auto;
  right: 15px;
}
.hc-sortoptions__loading:before {
  content: "";
  width: 20px;
  height: 20px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: inline;
  display: inline-block;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  animation: rotate 0.5s infinite linear;
  border: 3px solid #f4f4f4;
  border-top-color: #00aef0;
  vertical-align: middle;
  *zoom: 1;
  position: absolute;
  top: -3px;
  left: -6px;
}
.hc_rtl .hc-sortoptions__loading:before {
  left: auto;
  right: -6px;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
/* end: sort bar  */
/* Region Layout version 5 */
.hc_r_layout_v5 #hc_r_content {
  position: relative;
  display: block;
  width: 992px;
  text-align: left;
}
.hc_rtl.hc_r_layout_v5 #hc_r_content {
  text-align: right;
}
.hc_r_layout_v5 #hc_r_1 {
  position: relative;
  display: block;
  padding: 5px 10px;
}
.hc_rtl.hc_r_layout_v5 #hc_r_1 {
  display: block;
}
.hc_r_layout_v5 #hc_r_2 {
  display: none;
}
.hc_r_layout_v5 #hc_r_3 {
  position: relative;
  display: block;
  width: 100%;
  *width: 992px;
}
.hc_r_layout_v5 #hc_r_3b {
  position: relative;
  *display: inline-block;
  margin: 0;
  padding: 0 10px;
}
.hc_r_layout_v5 #hc_r_4 {
  display: none;
}
/* Region Layout version 5 full width */
.hc_r_layout_v5_full #hc_r_content {
  position: relative;
  display: block;
  min-width: 980px;
  *width: auto;
  max-width: 1210px;
  text-align: left;
  *width: 992px;
}
.hc_rtl.hc_r_layout_v5_full #hc_r_content {
  text-align: right;
}
.hc_r_layout_v5_full #hc_r_1 {
  position: relative;
  display: block;
  padding: 5px 10px;
}
.hc_rtl.hc_r_layout_v5_full #hc_r_1 {
  display: block;
}
.hc_r_layout_v5_full #hc_r_2 {
  display: none;
}
.hc_r_layout_v5_full #hc_r_3 {
  position: relative;
  display: block;
  width: 100%;
  *width: 992px;
}
.hc_r_layout_v5_full #hc_r_3b {
  position: relative;
  *display: inline-block;
  margin: 0;
  padding: 0 10px;
}
.hc_r_layout_v5_full #hc_r_4 {
  display: none;
}
/* Region Layout version 6 */
.hc_r_layout_v6 #hc_r_content {
  position: relative;
  display: block;
  width: 1210px;
  text-align: left;
}
.hc_rtl.hc_r_layout_v6 #hc_r_content {
  text-align: right;
}
.hc_r_layout_v6 #hc_r_1 {
  position: relative;
  display: block;
  padding: 5px 10px;
}
.hc_rtl.hc_r_layout_v6 #hc_r_1 {
  display: block;
}
.hc_r_layout_v6 #hc_r_2 {
  position: relative;
  display: none;
  float: left;
  width: 275px;
  margin-left: -100%;
  *margin-left: -1210px;
}
.hc_rtl.hc_r_layout_v6 #hc_r_2 {
  margin-left: -275px;
}
.hc_r_layout_v6 #hc_r_3 {
  position: relative;
  display: block;
  float: left;
  width: 100%;
  *width: 1210px;
}
.hc_r_layout_v6 #hc_r_3b {
  position: relative;
  *display: inline-block;
  margin: 0 220px 0 10px;
  padding-right: 10px;
}
.hc_rtl.hc_r_layout_v6 #hc_r_3b {
  margin-right: 10px;
  margin-left: 220px;
  padding-right: 0;
  padding-left: 10px;
}
.hc_r_layout_v6 #hc_r_4 {
  position: relative;
  display: block;
  float: right;
  padding-right: 10px;
  width: 220px;
  hack: 1 ; widt\h: 210px;
  margin-left: -220px;
}
.hc_rtl.hc_r_layout_v6 #hc_r_4 {
  float: left;
  padding-right: 0;
  padding-left: 10px;
  margin-left: -100%;
  *margin-left: -1210px;
}
.hc_r_layout_v6 #hc_r_5 {
  position: relative;
  z-index: 1;
}
/* Region Layout version 6 full width */
.hc_r_layout_v6_full #hc_r_content {
  position: relative;
  display: block;
  *width: auto;
  width: 1210px;
  text-align: left;
}
.hc_rtl.hc_r_layout_v6_full #hc_r_content {
  text-align: right;
}
.hc_r_layout_v6_full #hc_r_1 {
  position: relative;
  display: block;
  padding: 5px 10px;
}
.hc_rtl.hc_r_layout_v6_full #hc_r_1 {
  display: block;
}
.hc_r_layout_v6_full #hc_r_2 {
  position: relative;
  display: none;
  float: left;
  width: 275px;
  margin-left: -100%;
  *margin-left: -1210px;
}
.hc_rtl.hc_r_layout_v6_full #hc_r_2 {
  margin-left: -275px;
}
.hc_r_layout_v6_full #hc_r_3 {
  position: relative;
  display: block;
  float: left;
  width: 100%;
  *width: 1210px;
}
.hc_r_layout_v6_full #hc_r_3b {
  position: relative;
  *display: inline-block;
  margin: 0 220px 0 10px;
  padding-right: 10px;
}
.hc_rtl.hc_r_layout_v6_full #hc_r_3b {
  margin-right: 10px;
  margin-left: 220px;
  padding-right: 0;
  padding-left: 10px;
}
.hc_r_layout_v6_full #hc_r_4 {
  position: relative;
  display: block;
  float: right;
  padding-right: 10px;
  width: 220px;
  hack: 1 ; widt\h: 210px;
  margin-left: -220px;
}
.hc_rtl.hc_r_layout_v6_full #hc_r_4 {
  float: left;
  padding-right: 0;
  padding-left: 10px;
  margin-left: -100%;
  *margin-left: -1210px;
}
.hc_r_layout_v6_full #hc_r_5 {
  position: relative;
  z-index: 1;
}
/* HC City match and distance filters */
.hc_cityMatch h1 {
  margin-bottom: 10px;
}
.hc_cityMatch h1 span {
  font-weight: normal;
  display: block;
  font-size: 0.8em;
  padding: 5px 0 0;
}
.hc_cityMatch {
  font-size: 1.1em;
  font-weight: bold;
}
.hc_cityMatch ul {
  margin: 0;
  padding: 0;
  display: block;
}
.hc_cityMatch ul li {
  margin: 0;
  padding: 0 0 7px;
  display: block;
  position: relative;
  width: 500px;
}
.hc_cityMatch ul li span {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
}
.hc_rtl .hc_cityMatch ul li span {
  right: auto;
  left: 0;
}
.hc_cityMatch ul li a .hc_icon {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  width: 18px;
  height: 20px;
}
.hc_rtl .hc_cityMatch ul li a .hc_icon {
  right: auto;
  left: 0;
}
/* HC Universal Search Results page */
.hc_rtl #hc_usr {
  direction: rtl;
}
#hc_usr .hc_usi {
  position: relative;
  display: block;
  *display: inline-block;
  padding: 10px;
  margin: 0;
  border-bottom: 1px solid #eee;
}
#hc_usr .hc_usi.hc_highlight {
  cursor: pointer;
  background: #f6f6f6;
  font-weight: bold!important;
}
#hc_usr .hc_usi h2 {
  font-weight: normal;
  margin: 0;
  padding: 0 0 5px;
}
#hc_usr .hc_usi.hc_selected h2 {
  font-weight: bold;
}
#hc_usr .hc_usi a.hc_usi_photo {
  display: block;
  float: left;
  padding: 2px;
  margin: 2px 12px 2px 2px;
  border: 1px solid #eee;
}
.hc_rtl #hc_usr .hc_usi a.hc_usi_photo {
  margin-right: 2px;
  margin-left: 12px;
  float: right;
}
#hc_usr .hc_usi a.hc_usi_photo img {
  width: 51px;
  float: left;
}
#hc_usr .hc_usi.hc_highlight .hc_usi_photo {
  border: 5px solid #fff !important;
  padding: 0;
  margin: 0 10px 0 0;
}
.hc_rtl #hc_usr .hc_usi.hc_highlight .hc_usi_photo {
  margin-right: 0;
  margin-left: 10px;
}
#hc_usr .hc_usi a.hc_usi_photo:hover {
  border: 2px solid #669900 !important;
  padding: 1px;
  margin: 2px 12px 2px 2px;
}
.hc_rtl #hc_usr .hc_usi a.hc_usi_photo:hover {
  margin-right: 2px;
  margin-left: 12px;
}
#hc_usr .hc_usi .hc_usi_desc {
  position: relative;
  font-weight: normal;
  font-size: 1em;
  padding: 0 26px 0 0;
  float: left;
}
.hc_rtl #hc_usr .hc_usi .hc_usi_desc {
  padding-right: 0;
  padding-left: 26px;
  float: right;
}
#hc_usr .hc_usi .hc_usi_desc .hc_icon {
  background: url(https://cdn.datahc.com/Images/hc_flags_8bit.png?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) no-repeat 0 0;
  width: 16px;
  height: 11px;
  display: block;
  position: absolute;
  right: 0;
  top: 2px;
  overflow: hidden;
}
.hc_rtl #hc_usr .hc_usi .hc_usi_desc .hc_icon {
  right: auto;
  left: 0;
}
#hc_usr .hc_usi .hc_usi_desc .hc_usi_type {
  font-weight: bold;
  border-right: 1px solid #ccc;
  margin: 0 9px 0 0;
  padding: 0 10px 0 0;
}
.hc_rtl #hc_usr .hc_usi .hc_usi_desc .hc_usi_type {
  margin-right: 0;
  margin-left: 9px;
  padding-right: 0;
  padding-left: 10px;
  border-left: 1px solid #ccc;
  border-right: none;
  display: inline-block;
}
#hc_usr .hc_usi .hc_usi_numHotels {
  display: block;
  font-size: 1.2em;
  font-weight: bold;
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -0.5em;
}
.hc_rtl #hc_usr .hc_usi .hc_usi_numHotels {
  right: auto;
  left: 10px;
}
.hc_rtl #hc_usr .hc_usi .cDiv {
  clear: right;
}
/***** END: PLACE DISAMBIGUATION PAGE STYLES ******/
/*search results items*/
.hc-searchresultitem {
  display: block;
  background: #fff;
  margin: 0;
  padding: 20px;
  position: relative;
  border-bottom: 1px dotted #CCCCCC;
  /* content areas */
  /* content items */
}
.hc_rtl .hc-searchresultitem {
  direction: rtl;
}
.hc-searchresultitem--highlighted {
  border: 1px solid #669900;
  padding-bottom: 40px;
}
.hc-searchresultitem__hotelsummary {
  display: block;
  padding: 0 220px 20px 0;
  min-height: 60px;
}
.hc-searchresultitem__hotelsummary--noguestreviews {
  padding-right: 0;
}
.hc_rtl .hc-searchresultitem__hotelsummary {
  padding-left: 220px;
  padding-right: 0;
}
.hc_rtl .hc-searchresultitem__hotelsummary--noguestreviews {
  padding-left: 0;
}
.hc-searchresultitem__ratingsummary {
  display: block;
  width: 210px;
  position: absolute;
  top: 20px;
  right: 20px;
}
.hc_rtl .hc-searchresultitem__ratingsummary {
  right: auto;
  left: 20px;
}
.hc-searchresultitem__gallery {
  display: block;
  width: 290px;
  height: 290px;
  position: absolute;
  left: 20px;
  background: #f4f4f4;
  overflow: hidden;
  direction: ltr;
  text-align: left;
}
.hc_rtl .hc-searchresultitem__gallery {
  left: auto;
  right: 20px;
  direction: ltr;
}
.hc-searchresultitem__gallerylist {
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
}
.hc-searchresultitem__galleryitem {
  width: 290px;
  height: 290px;
  margin: 0;
  padding: 0;
  background-size: cover;
  background-position: center center;
  float: left;
  background-image: url(https://cdn.datahc.com/Content/Images/Mobile/Shared/hc_loader1i.gif?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38);
}
.hc_rtl .hc-searchresultitem__galleryitem {
  float: right;
  margin-right: 0;
}
.hc-searchresultitem__gallerybutton {
  text-decoration: none;
  display: block;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  position: absolute;
  top: 125px;
}
.hc-searchresultitem__gallerybutton:hover {
  background: rgba(0, 0, 0, 0.6);
}
.hc-searchresultitem__gallerybutton--disabled {
  background: rgba(0, 0, 0, 0.2);
  cursor: default;
}
.hc-searchresultitem__gallerybutton--disabled:hover {
  background: rgba(0, 0, 0, 0.2);
}
.hc-searchresultitem__gallerybutton--disabled:before {
  color: rgba(255, 255, 255, 0.3);
}
.hc-searchresultitem__gallerybutton:before {
  display: inline-block;
  font-size: 3em;
  margin-top: 2px;
  font-weight: bold;
}
.hc-searchresultitem__gallerynext {
  right: 0;
}
.hc_rtl .hc-searchresultitem__gallerynext {
  left: 0;
  right: auto;
}
.hc-searchresultitem__gallerynext:before {
  font-family: "icons";
  content: "\e921";
  margin-left: 5px;
}
.hc_rtl .hc-searchresultitem__gallerynext:before {
  content: "\e922";
  margin-left: auto;
}
.hc-searchresultitem__galleryprevious {
  left: 0;
}
.hc_rtl .hc-searchresultitem__galleryprevious {
  right: 0;
  left: auto;
}
.hc-searchresultitem__galleryprevious:before {
  font-family: "icons";
  content: "\e922";
}
.hc_rtl .hc-searchresultitem__galleryprevious:before {
  content: "\e921";
  margin-left: 5px;
}
.hc-searchresultitem__deals {
  display: block;
  margin: 0 0 0 310px;
  min-height: 265px;
}
.hc_rtl .hc-searchresultitem__deals {
  margin-left: 0;
  margin-right: 310px;
}
.hc-searchresultitem__deals--none {
  min-height: 290px;
  background: url(https://cdn.datahc.com/Content/Images/Desktop/Shared/no-deals-bg.png?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) repeat-y top right;
}
.hc_rtl .hc-searchresultitem__deals--none {
  background-position: top left;
}
.hc-searchresultitem__deals--none:before {
  display: inline-block;
  content: "";
  width: 240px;
  height: 290px;
  position: absolute;
  left: 330px;
  background: #fff url(https://cdn.datahc.com/Content/Images/Desktop/Shared/no-deals-bg.png?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) repeat-y top left;
}
.hc_rtl .hc-searchresultitem__deals--none:before {
  background-position: top right;
  left: auto;
  right: 330px;
}
.hc-searchresultitem__lastbookedandmoredeals {
  display: block;
  padding: 5px 0 0;
  margin: 0 0 0 310px;
}
.hc_rtl .hc-searchresultitem__lastbookedandmoredeals {
  margin-left: 0;
  margin-right: 310px;
}
.hc-searchresultitem__greatvalue {
  display: block;
  height: 20px;
  line-height: 20px;
  font-size: 10px;
  color: #fff;
  padding: 0 5px 0 10px;
  background: #3caa87;
  text-align: center;
  position: absolute;
  left: 0;
  z-index: 10;
  margin: 15px 0 0 50px;
}
.hc_rtl .hc-searchresultitem__greatvalue {
  right: 0;
  left: auto;
  padding-left: 5px;
  padding-right: 10px;
  margin-left: 0;
  margin-right: 50px;
}
.hc-searchresultitem__greatvalue:before {
  display: block;
  content: "\e607";
  font-family: "icons";
  position: absolute;
  top: -5px;
  left: -22px;
  z-index: 2;
  width: 25px;
  height: 30px;
  line-height: 30px;
  font-size: 30px;
  color: #3caa87;
}
.hc_rtl .hc-searchresultitem__greatvalue:before {
  left: auto;
  right: -22px;
}
.hc-searchresultitem__greatvalue:after {
  content: "";
  width: 15px;
  height: 20px;
  background: #fff;
  position: absolute;
  top: 0;
  left: -15px;
  z-index: 1;
}
.hc_rtl .hc-searchresultitem__greatvalue:after {
  left: auto;
  right: -15px;
}
.hc-searchresultitem__hotelname {
  color: #333333;
  font-size: 28px;
  line-height: 34px;
  font-weight: normal;
  display: inline;
  padding: 0;
  margin: 0;
}
.hc-searchresultitem__hotelnamelink,
.hc-searchresultitem__transliteratedhotelname {
  text-decoration: none;
  color: #333333;
}
.hc-searchresultitem__transliteratedhotelname {
  font-size: 21px;
}
.hc-searchresultitem__hotelrating {
  cursor: pointer;
}
.hc-searchresultitem .hc-hotelrating {
  display: inline-block;
  width: 85px;
  margin: 0 0 0 5px;
  position: relative;
  top: 3px;
}
.hc_rtl .hc-searchresultitem .hc-hotelrating {
  margin-left: 0;
  margin-right: 5px;
}
.hc-searchresultitem .hc-hotelrating__value:before,
.hc-searchresultitem .hc-hotelrating__value:after {
  font-size: 15px;
}
.hc-searchresultitem__location {
  display: block;
  margin: 8px 0 0;
  padding: 0;
}
.hc-searchresultitem__distanceandplace {
  margin: 0;
  padding: 0;
  display: inline-block;
  font-size: 16px;
}
.hc-searchresultitem__showmap {
  margin: 0 0 0 10px;
  padding: 0 0 0 10px;
  display: inline-block;
  font-size: 16px;
  border-left: 1px solid #333333;
}
.hc_rtl .hc-searchresultitem__showmap {
  margin-left: 0;
  margin-right: 10px;
  padding-left: 0;
  padding-right: 10px;
  border-left: 0;
  border-right: 1px solid #333333;
  direction: rtl;
}
.hc-searchresultitem__showmaplink {
  text-decoration: none;
}
.hc-searchresultitem__showmaplink:before {
  font-family: "icons";
  content: "\e803";
  position: relative;
  color: #669900;
  margin-right: 3px;
}
.hc_rtl .hc-searchresultitem__showmaplink:before {
  margin-right: 0;
  margin-left: 3px;
}
.hc-searchresultitem__showmaplink:hover,
.hc-searchresultitem__showmaplink:focus {
  color: #669900;
}
.hc-searchresultitem__lastbooked {
  font-size: 10px;
  color: #CCCCCC;
  margin: 0;
  padding: 0;
  display: inline-block;
}
.hc-searchresultitem__moredeals {
  font-size: 12px;
  margin: 0;
  padding: 0;
  float: right;
  display: inline-block;
}
.hc_rtl .hc-searchresultitem__moredeals {
  float: left;
}
.hc-searchresultitem .hc_sri_search {
  margin-top: 40px;
}
.hc-searchresultitem .hc_sri_search .hc_m_close {
  font-size: 14px;
  top: 10px;
  right: 10px;
}
.hc_rtl .hc-searchresultitem .hc_sri_search .hc_m_close {
  right: auto;
  left: 10px;
}
.hc-searchresultitem__soldout {
  min-height: 290px;
  background: rgba(0, 0, 0, 0.9);
  margin: 0;
  position: relative;
  z-index: 10;
  color: #fff;
  font-size: 30px;
  padding: 50px 20px 20px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
}
.hc-searchresultitem__soldoutfrown {
  font-size: 80px;
  display: block;
  margin-bottom: 50px;
}
.hc-searchresultitem__noavailabilitytext {
  font-size: 16px;
  margin: 0;
}
.hc-guestratingcontainer {
  position: absolute;
  left: 3px;
  top: 10px;
  z-index: 15;
  background-color: #f4f4f4;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 1px 1px 2px 0 rgba(13, 13, 13, 0.25);
  -webkit-box-shadow: 1px 1px 2px 0 rgba(13, 13, 13, 0.25);
  box-shadow: 1px 1px 2px 0 rgba(13, 13, 13, 0.25);
  position: relative;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}
.hc_rtl .hc-guestratingcontainer {
  left: auto;
  right: 3px;
}
.hc-guestratingcontainer .hc-loading:before {
  position: absolute;
  left: 27px;
  top: -8px;
  content: '';
  display: block;
  margin-left: -8px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom-width: 8px;
  border-bottom-style: solid;
  color: #f4f4f4;
}
.hc_rtl .hc-guestratingcontainer .hc-loading:before {
  left: auto;
  right: 18px;
}
.hc-guestratingpopover {
  position: absolute;
  left: 3px;
  min-width: 145px;
  z-index: 1;
  background-color: #f4f4f4;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 1px 1px 2px 0 rgba(13, 13, 13, 0.25);
  -webkit-box-shadow: 1px 1px 2px 0 rgba(13, 13, 13, 0.25);
  box-shadow: 1px 1px 2px 0 rgba(13, 13, 13, 0.25);
}
.hc_rtl .hc-guestratingpopover {
  left: auto;
  right: 3px;
}
.hc-guestratingpopover:before {
  position: absolute;
  left: 25px;
  top: -8px;
  content: '';
  display: block;
  margin-left: -8px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom-width: 8px;
  border-bottom-style: solid;
  color: #f4f4f4;
}
.hc_rtl .hc-guestratingpopover:before {
  left: auto;
  right: 16px;
}
.hc-guestratingpopover__categories {
  list-style: none;
  padding: 16px 10px 24px 14px;
}
.hc_rtl .hc-guestratingpopover__categories {
  padding: 16px 14px 24px 10px;
}
.hc-guestratingpopover__ratingbar {
  width: 100%;
  height: 7px;
  position: absolute;
  left: 0;
  bottom: -11px;
  content: "";
  background: #669900;
}
.hc_rtl .hc-guestratingpopover__ratingbar {
  left: auto;
  right: 0;
}
.hc-guestratingpopover__category {
  position: relative;
  padding: 0;
  margin-left: 0;
  margin-bottom: 21px;
  color: #333333;
  font-size: 12px;
  line-height: 14px;
}
.hc_rtl .hc-guestratingpopover__category {
  margin-right: 0;
  margin-left: auto;
  direction: rtl;
}
.hc-guestratingpopover__category:before {
  width: 100%;
  height: 7px;
  position: absolute;
  left: 0;
  bottom: -11px;
  content: "";
  background: #fff;
}
.hc_rtl .hc-guestratingpopover__category:before {
  right: 0;
  left: auto;
}
.hc-guestratingpopover__category:last-child {
  margin-bottom: 0px;
}
.hc-searchresultitemdeal {
  border-top: 1px solid #f4f4f4;
}
.hc-searchresultitemdeal:last-child {
  border-bottom: 1px solid #f4f4f4;
}
.hc-desktop--small .hc-searchresultitemdeal .hc-searchresultitemdeal__link,
.hc_d_tablet .hc-searchresultitemdeal .hc-searchresultitemdeal__link {
  display: block;
  position: relative;
  padding-right: 150px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.hc_rtl.hc-desktop--small .hc-searchresultitemdeal .hc-searchresultitemdeal__link,
.hc_rtl.hc_d_tablet .hc-searchresultitemdeal .hc-searchresultitemdeal__link {
  padding-right: 0;
  padding-left: 150px;
}
.hc-desktop--small .hc-searchresultitemdeal .hc-searchresultitemdeal__provider,
.hc_d_tablet .hc-searchresultitemdeal .hc-searchresultitemdeal__provider {
  display: block;
}
.hc-desktop--small .hc-searchresultitemdeal .hc-searchresultitemdeal__xtras,
.hc_d_tablet .hc-searchresultitemdeal .hc-searchresultitemdeal__xtras {
  display: block;
  padding: 5px 0 0;
}
.hc-desktop--small .hc-searchresultitemdeal .hc-searchresultitemdeal__inclusionslist,
.hc_d_tablet .hc-searchresultitemdeal .hc-searchresultitemdeal__inclusionslist {
  margin-top: 3px;
}
.hc-searchresultitemdeal--bestrate .hc-searchresultitemdeal__link {
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.hc-desktop--small .hc-searchresultitemdeal--bestrate .hc-searchresultitemdeal__link,
.hc_d_tablet .hc-searchresultitemdeal--bestrate .hc-searchresultitemdeal__link {
  min-height: 100px;
}
.hc-desktop--small .hc-searchresultitemdeal--bestrate .hc-searchresultitemdeal__rate,
.hc_d_tablet .hc-searchresultitemdeal--bestrate .hc-searchresultitemdeal__rate {
  width: 140px;
  position: absolute;
  top: 10px;
  right: 10px;
}
.hc_rtl.hc-desktop--small .hc-searchresultitemdeal--bestrate .hc-searchresultitemdeal__rate,
.hc_rtl.hc_d_tablet .hc-searchresultitemdeal--bestrate .hc-searchresultitemdeal__rate {
  right: auto;
  left: 10px;
}
.hc-desktop--small .hc-searchresultitemdeal--bestrate .hc-button,
.hc_d_tablet .hc-searchresultitemdeal--bestrate .hc-button {
  margin: 5px 0 0;
  padding: 0;
  display: inline-block;
}
.hc-desktop--small .hc-searchresultitemdeal--bestrate .hc-button__link,
.hc_d_tablet .hc-searchresultitemdeal--bestrate .hc-button__link {
  display: -webkit-inline-flex;
  display: inline-flex;
  -webkit-align-items: center;
  align-items: center;
  white-space: normal;
  margin: 0;
  padding: 0 10px;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.hc-searchresultitemdeal--other .hc-searchresultitemdeal__rate {
  padding-right: 25px;
}
.hc_rtl .hc-searchresultitemdeal--other .hc-searchresultitemdeal__rate {
  padding-left: 25px;
  padding-right: 0px;
}
.hc-searchresultitemdeal--other .hc-searchresultitemdeal__rate:after {
  font-family: "icons";
  content: "\e921";
  position: absolute;
  top: 50%;
  right: 5px;
  margin-top: -12px;
  font-size: 24px;
  width: 24px;
  height: 24px;
}
.hc_rtl .hc-searchresultitemdeal--other .hc-searchresultitemdeal__rate:after {
  right: auto;
  left: 5px;
  content: "\e922";
}
.hc-desktop--small .hc-searchresultitemdeal--other .hc-searchresultitemdeal__link,
.hc_d_tablet .hc-searchresultitemdeal--other .hc-searchresultitemdeal__link {
  min-height: 52px;
}
.hc-desktop--small .hc-searchresultitemdeal--other .hc-searchresultitemdeal__rate,
.hc_d_tablet .hc-searchresultitemdeal--other .hc-searchresultitemdeal__rate {
  width: 140px;
  position: absolute;
  top: 50%;
  margin-top: -22px;
  right: 10px;
}
.hc_rtl.hc-desktop--small .hc-searchresultitemdeal--other .hc-searchresultitemdeal__rate,
.hc_rtl.hc_d_tablet .hc-searchresultitemdeal--other .hc-searchresultitemdeal__rate {
  right: auto;
  left: 10px;
}
.hc-desktop--small .hc-searchresultitemdeal--other .hc-searchresultitemdeal__rate:after,
.hc_d_tablet .hc-searchresultitemdeal--other .hc-searchresultitemdeal__rate:after {
  right: -5px;
}
.hc_rtl.hc-desktop--small .hc-searchresultitemdeal--other .hc-searchresultitemdeal__rate:after,
.hc_rtl.hc_d_tablet .hc-searchresultitemdeal--other .hc-searchresultitemdeal__rate:after {
  right: auto;
  left: -5px;
}
.hc-searchresultitemdeal__link {
  position: relative;
  display: block;
  padding: 5px 10px;
  text-decoration: none;
  color: #333333;
  margin: 0 -10px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
}
.hc-searchresultitemdeal__link:hover {
  text-decoration: none;
  background: #f0f0f0;
  border-top-color: #f0f0f0;
}
.hc-searchresultitemdeal__provider {
  display: inline-block;
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  white-space: nowrap;
}
.hc-searchresultitemdeal__xtras {
  display: inline-block;
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 0 10px;
}
.hc-searchresultitemdeal__rate {
  display: inline-block;
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  text-align: right;
  z-index: 0;
}
.hc_rtl .hc-searchresultitemdeal__rate {
  text-align: left;
}
.hc-searchresultitemdeal__providerlogo {
  display: inline-block;
  vertical-align: middle;
}
.hc-searchresultitemdeal .hc_icon {
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
}
.hc_rtl .hc-searchresultitemdeal .hc_icon {
  margin-left: 0;
  margin-right: 5px;
}
.hc-searchresultitemdeal__bookwithhotel {
  border: 1px solid #3caa87;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  margin: 0;
  padding: 6px 10px 6px 30px;
  font-size: 11px;
  line-height: 16px;
  font-weight: bold;
  color: #3caa87;
  white-space: nowrap;
}
.hc_rtl .hc-searchresultitemdeal__bookwithhotel {
  padding-left: 10px;
  padding-right: 30px;
}
.hc-searchresultitemdeal__bookwithhotel:before {
  font-family: "icons";
  content: "\e958";
  width: 14px;
  height: 14px;
  display: block;
  position: absolute;
  top: 50%;
  left: 10px;
  margin-top: -8px;
  text-align: center;
}
.hc_rtl .hc-searchresultitemdeal__bookwithhotel:before {
  right: 10px;
  left: 0;
}
.hc-searchresultitemdeal__viewdealwrapper {
  margin-top: 5px;
}
.hc-searchresultitemdeal__currentrate {
  font-size: 22px;
  color: #333333;
  margin: 0;
  padding: 0;
  white-space: nowrap;
}
.hc-searchresultitemdeal__currentrate .hc_pr_cur,
.hc-searchresultitemdeal__currentrate .hc_pr_syb {
  font-size: 14px;
}
.hc-searchresultitemdeal__nights {
  color: #333333;
  font-size: 10px;
  line-height: 12px;
  display: block;
  margin: 0;
  padding-bottom: 0;
}
.hc-searchresultitemdeal__roomrate {
  font-size: 22px;
  margin: 0;
  padding: 0;
  color: #333333;
  display: inline-block;
  white-space: nowrap;
}
.hc-searchresultitemdeal__roomrate .hc_pr_cur,
.hc-searchresultitemdeal__roomrate .hc_pr_syb {
  font-size: 14px;
}
.hc-searchresultitemdeal .hc-button {
  margin-top: 5px;
}
.hc-searchresultitemdeal__inclusionslist {
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-block;
}
.hc-searchresultitemdeal__inclusionitem {
  margin: 0 5px 0 0;
  padding: 0;
  list-style: none;
  color: #333333;
  display: inline-block;
  line-height: 16px;
}
.hc_rtl .hc-searchresultitemdeal__inclusionitem {
  margin-right: 0;
  margin-left: 5px;
}
.hc-searchresultitemdeal__inclusionitem:before {
  font-family: "icons";
  content: "\e807";
  color: #669900;
  display: inline-block;
  position: relative;
  top: 1px;
  margin-right: 3px;
}
.hc_rtl .hc-searchresultitemdeal__inclusionitem:before {
  margin-right: 0;
  margin-left: 3px;
}
.hc-searchresultitemdeal__roomsleftmessage {
  display: inline-block;
  margin: 0;
  padding: 0;
  color: #B80000;
  line-height: 16px;
}
.hc-searchresultitemdeal__roomsleftmessage:before {
  font-family: "icons";
  content: "\e919";
  display: inline-block;
  position: relative;
  margin-right: 3px;
  font-weight: bold;
  font-size: 12px;
}
.hc_rtl .hc-searchresultitemdeal__roomsleftmessage:before {
  margin-right: 0;
  margin-left: 3px;
}
.hc-button {
  text-align: right;
}
.hc_rtl .hc-button {
  text-align: left;
}
.hc-button__link {
  display: inline-block;
  height: 32px;
  line-height: 32px;
  font-size: 16px;
  font-weight: normal;
  padding: 0 20px;
  white-space: nowrap;
}
.hc-button--viewdeal .hc-button__link {
  height: 32px;
  line-height: 32px;
  font-size: 16px;
  font-weight: normal;
  padding: 0 20px;
}
/*end: search results items*/
