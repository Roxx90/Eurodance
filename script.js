const songs = [
// 1) prilepi vse svoje "view" povezave sem ↓ (lahko jih je tudi 300)
const viewLinks = [
  https://drive.google.com/file/d/1-ZlwqpOltMic859rjxQ0ZSu9SjneLPSg/view?usp=sharing,
  https://drive.google.com/file/d/1-fFVdDIhBs52Vb5kv1u0nwI8kZzvsASB/view?usp=sharing,
  https://drive.google.com/file/d/10C1Rtr36asNYXsiEHRvGrTZ6yLqu6WF1/view?usp=sharing,
  https://drive.google.com/file/d/10CP3bJjPhhEbbEXiHfko0BbmGhD6b0k6/view?usp=sharing,
  https://drive.google.com/file/d/11_alisckk-3KSWFvJj5VkwxfjDrr8feL/view?usp=sharing,
  https://drive.google.com/file/d/11nykknsjCMBPWcqapdkUSpFKKEckAe0F/view?usp=sharing,
  https://drive.google.com/file/d/11t1ttnIPFshWQCGlZtn57aLIMHiDM_Mh/view?usp=sharing,
  https://drive.google.com/file/d/11wwaZANJuNHSR6NXxXtbqOgKCPka0RXo/view?usp=sharing,
  https://drive.google.com/file/d/11zT5l9GJkbxdmXZCCqIoutYgnhUOSaew/view?usp=sharing,
  https://drive.google.com/file/d/125i_FrL0G5v-qqG2mxwFVkH0mCiffN_u/view?usp=sharing,
  https://drive.google.com/file/d/128CgEGjtJgk-i_kTXQP34DJzEEi6yJZC/view?usp=sharing,
  https://drive.google.com/file/d/12E0Qg7s9CUEiVlEe8opcSIwn26xJhvXA/view?usp=sharing,
  https://drive.google.com/file/d/12JEBbpmgjliGnS15q55CksJAJ49cHQXc/view?usp=sharing,
  https://drive.google.com/file/d/12daTnodqLOba1p6FB1cDNcrv1s9lO7Lp/view?usp=sharing,
  https://drive.google.com/file/d/132nYvepyCEs8fO1Y4HY__8g3WQIrRjC1/view?usp=sharing,
  https://drive.google.com/file/d/13Oe4vU-8tNC9tCMGzlS1KDBHMD6ubWUo/view?usp=sharing,
  https://drive.google.com/file/d/13yjq_CoFkXKZzj4yUS7g-TwOR9T7_qpM/view?usp=sharing,
  https://drive.google.com/file/d/144k4w-hG0VpWaX7MmZraoOeiGVUBGp81/view?usp=sharing,
  https://drive.google.com/file/d/145gM8DPbzqLVBwlzwtfvCDsjkN6iCRpf/view?usp=sharing,
  https://drive.google.com/file/d/14L9-ESrcWTk9ETCGXhPmfCOxmroN_Z9F/view?usp=sharing,
  https://drive.google.com/file/d/14zXab21OoHfnc48VpbW8guVtclYwGEMG/view?usp=sharing,
  https://drive.google.com/file/d/15EBiLyNDpBnBZF1cl8FbkYTUCZyPgS2L/view?usp=sharing,
  https://drive.google.com/file/d/15QUrKq4yxwhv76gxMQDAKfgX8xQSzf2R/view?usp=sharing,
  https://drive.google.com/file/d/15xikSJF1LpExTX3LOuhUWt__dmW929Jq/view?usp=sharing,
  https://drive.google.com/file/d/161IkdLe2_h3JXbcLsMOBpRJpLuCmsMO_/view?usp=sharing,
  https://drive.google.com/file/d/16SvEdZYxKCN-Xvp4dlY5nBlV_BOhSbSZ/view?usp=sharing,
  https://drive.google.com/file/d/1746QVPg9l-TNFMNtHp2N8lltW5vbyj_i/view?usp=sharing,
  https://drive.google.com/file/d/183WZJzERKyFI2be9tQ_BX_8Vfpas6Vrn/view?usp=sharing,
  https://drive.google.com/file/d/185CS0whvoEkaGEIjUcdfSOb0JrYTq5Ko/view?usp=sharing,
  https://drive.google.com/file/d/18L0HWGbTU0g_gs2FQVhtSyK9UM99GLQl/view?usp=sharing,
  https://drive.google.com/file/d/18P27CfnpvRwBXv1jDO7Z_qhtgZ15eqgJ/view?usp=sharing,
  https://drive.google.com/file/d/19_Bn0khV0uqoCOw_Xp6iYUPCWBtbYxaA/view?usp=sharing,
  https://drive.google.com/file/d/19eLv5P8V7rh7DqBoJHtTHSlbFV2fKRdF/view?usp=sharing,
  https://drive.google.com/file/d/19o0_hfa1JrxvxFMoN8YKcSdBd-aq_Eqa/view?usp=sharing,
  https://drive.google.com/file/d/1A0VqTDvk5_V6JDfSSgpxsM0XGttQqEL-/view?usp=sharing,
  https://drive.google.com/file/d/1A8qAp0lED1U8ls3Z9xd6oPF3HK4sUDaP/view?usp=sharing,
  https://drive.google.com/file/d/1ALvWa8SwzMPZ9t9jENFFzWHyI9s79Taa/view?usp=sharing,
  https://drive.google.com/file/d/1ARMgrAcMZxyJBTHPNT_L-Fnyk0O5RT__/view?usp=sharing,
  https://drive.google.com/file/d/1ATZCKLgK4VWpaTcFvHy7BN7fwl3J91um/view?usp=sharing,
  https://drive.google.com/file/d/1AgVwztlqdgUoVcQItV4cAGlW0J1o8m4-/view?usp=sharing,
  https://drive.google.com/file/d/1B9jTFBSEXYVOrKn-wt_2q9YtL14dQop2/view?usp=sharing,
  https://drive.google.com/file/d/1BVIXuEjp94u6mo4WKqMsQHW6IFZK1GR1/view?usp=sharing,
  https://drive.google.com/file/d/1C-pWvdH4eaO0B7Sj2lRE-0QFTZmS8eqX/view?usp=sharing,
  https://drive.google.com/file/d/1CPDj8Dh5FiEf8AyoZTxwv5wvqF2KXnSK/view?usp=sharing,
  https://drive.google.com/file/d/1CTLSvkqMNOmDkvln9m-85n8ulZGQb1p-/view?usp=sharing,
  https://drive.google.com/file/d/1Cf9CpxbMkHr5pPpcaAdtc4dXMVr1oADq/view?usp=sharing,
  https://drive.google.com/file/d/1D840bpqlpmdYhFk8vURx2GirCBeLCY3n/view?usp=sharing,
  https://drive.google.com/file/d/1EVif9b4gEtRWyHFqiJY23ZzVOgdSVqZM/view?usp=sharing,
  https://drive.google.com/file/d/1EnE528iIoRjtOKNp1lT7l2Bt7dm3Q7p2/view?usp=sharing,
  https://drive.google.com/file/d/1GGLyda0K6UFesc8arNxsKXHelui59LdY/view?usp=sharing,
  https://drive.google.com/file/d/1HQ4v7gsrLOIWOeYQYeJPY5WDLiz4pn0B/view?usp=sharing,
  https://drive.google.com/file/d/1I4g2Crw6lBwcrMWMYLpZpwrusrd7WB6E/view?usp=sharing,
  https://drive.google.com/file/d/1IRn9yfmpAwTcsYWO0aUs18klTqG3eZph/view?usp=sharing,
  https://drive.google.com/file/d/1IRsinqQCuMHwKpEEiuqkzlepcO4Ds0yd/view?usp=sharing,
  https://drive.google.com/file/d/1IlZFSMicSvrsxC4PDAfW-RP0UOS7PpUc/view?usp=sharing,
  https://drive.google.com/file/d/1InmUwvK9oNaUbluR4IiT0NskpsPFWsB6/view?usp=sharing,
  https://drive.google.com/file/d/1JAYvwq1RXW7MsWN0eFi5U7jPuE7lSqVi/view?usp=sharing,
  https://drive.google.com/file/d/1JFr60UuTRme0WbT60ZMfC9CmId-JQQ9n/view?usp=sharing,
  https://drive.google.com/file/d/1JLltpx49rf9GUqrsslcFGVXP75YHoPud/view?usp=sharing,
  https://drive.google.com/file/d/1JjHEC0Hm9i44MhsfHrGx4Nh_GRFDqfwc/view?usp=sharing,
  https://drive.google.com/file/d/1JnJ14sNL_OZLzpiubzZnNq_9HV9ThP75/view?usp=sharing,
  https://drive.google.com/file/d/1KFYwX1Dua5TbMMbjUBSa2E_byDslHvfI/view?usp=sharing,
  https://drive.google.com/file/d/1KGlOLl1RHyxzpt84hyOt4RmVuMbZukg7/view?usp=sharing,
  https://drive.google.com/file/d/1KWEXil_P-bPWflqdi-aa5VmYqKn_VgVN/view?usp=sharing,
  https://drive.google.com/file/d/1LxbTbhdZ9d743W1PckUGJy3itFEr7X1z/view?usp=sharing,
  https://drive.google.com/file/d/1LzwGtgOJbYx-oetOmDZuY2MQwPJyQB4C/view?usp=sharing,
  https://drive.google.com/file/d/1M8qdWRTiwkgur0h_0mzWRwRZlZls13Wu/view?usp=sharing,
  https://drive.google.com/file/d/1MIBBB2Md5c4hk52HIu3q8B_oUVmXiIjn/view?usp=sharing,
  https://drive.google.com/file/d/1MQ6XiOrf-1MhTBXYK9kM9E_mgJC16NlU/view?usp=sharing,
  https://drive.google.com/file/d/1MnwN5wSbIkB4KnzQFpCpRJy7rHkyG5tY/view?usp=sharing,
  https://drive.google.com/file/d/1MzqYaw7nofDWoKDVSA0Jyz5TL0A-rrna/view?usp=sharing,
  https://drive.google.com/file/d/1Nk6383aqsFI2Ntl8dq7iqxWsB2FJ1iBS/view?usp=sharing,
  https://drive.google.com/file/d/1Ocp6tUnrDXaV_U0qO09Yxw9x76WxtezP/view?usp=sharing,
  https://drive.google.com/file/d/1OhSKZC4nWLjJwb-PdlXXVWA7elXPbClG/view?usp=sharing,
  https://drive.google.com/file/d/1OyK3t24lbBvbOsB-k745Isek9ffdyKRr/view?usp=sharing,
  https://drive.google.com/file/d/1PLQe02fcdh-I4JWadDzh56kdz9USCXvK/view?usp=sharing,
  https://drive.google.com/file/d/1POx1rKuitUZfldXuKSSxCcOy3nPqYHkq/view?usp=sharing,
  https://drive.google.com/file/d/1PSqW4WJWg0gFHHbeIdGQR5S6R90Iu4R9/view?usp=sharing,
  https://drive.google.com/file/d/1PioDOu4RVtrqPOOlhIY109DRRhTMxmVX/view?usp=sharing,
  https://drive.google.com/file/d/1Pnbi3EfEuS2tbNXPiHd-JiQ4iz32QZHo/view?usp=sharing,
  https://drive.google.com/file/d/1QICbsrOkxheuc2eWYNIpng9TXE6IJtSN/view?usp=sharing,
  https://drive.google.com/file/d/1QWbt3z9-o3VHTprtyDKaTa1qsh3Ia-XX/view?usp=sharing,
  https://drive.google.com/file/d/1QftjdJpxkS5TVZZ_amZQ-v32Jg2KV6Rv/view?usp=sharing,
  https://drive.google.com/file/d/1QlYRWWE_HIdc9O8tyG8jlHlN33fj_-uC/view?usp=sharing,
  https://drive.google.com/file/d/1QxEkT4vAGqh_G6PQ7G7Q1LR4-9iCtFnE/view?usp=sharing,
  https://drive.google.com/file/d/1QyTOKPH-V7wNvMihWyefjOAg11wi45h_/view?usp=sharing,
  https://drive.google.com/file/d/1RH6NT_FEwz_l0mmEw4fFkBh8DgeEF7ih/view?usp=sharing,
  https://drive.google.com/file/d/1RnIYhw-JGtyjQVM-zxl7M5PVHUJKmI3-/view?usp=sharing,
  https://drive.google.com/file/d/1RyA3rEgDBqrhv52mw1BZH2PeTkEGuNtR/view?usp=sharing,
  https://drive.google.com/file/d/1RyhPBM4baqGPCWkGcN-3rdh6Z3bWepCH/view?usp=sharing,
  https://drive.google.com/file/d/1SHrACmvgsWXK1nHdyK_LWByotYwsgCdq/view?usp=sharing,
  https://drive.google.com/file/d/1SoloTokPAok70y6tRuPDqru-qYWZe7S8/view?usp=sharing,
  https://drive.google.com/file/d/1TFk9Tjlv79yDbXX0geQVSKqdJSuPxI-U/view?usp=sharing,
  https://drive.google.com/file/d/1TRMl1DujmEp1bdv4ISSfeqjhL-PaXN1K/view?usp=sharing,
  https://drive.google.com/file/d/1TlFN4RsYVgSOoFYi6Biaaqt5hJZQbHXx/view?usp=sharing,
  https://drive.google.com/file/d/1UDy0FvHjeOlTT_PiQ3UcQ6E8WjR4ySgI/view?usp=sharing,
  https://drive.google.com/file/d/1UEtxSgZanndqF6hbkqDGdGQ7iYvledfQ/view?usp=sharing,
  https://drive.google.com/file/d/1UOdn5GwmKrsncsuAZXDadi0eodC21b1k/view?usp=sharing,
  https://drive.google.com/file/d/1Uf_RIUPPVM5zMOBzdgaXgkZa6OM782RA/view?usp=sharing,
  https://drive.google.com/file/d/1UsCKNX8AnytSyCyA3qLcumnnNOINN7vI/view?usp=sharing,
  https://drive.google.com/file/d/1Ut_x1q9gDKRHOxgBDqc0KDQJiFmb1GmW/view?usp=sharing,
  https://drive.google.com/file/d/1UuCIoVDPeuJ8vQoBKJ9Me3KVo3vADSBr/view?usp=sharing,
  https://drive.google.com/file/d/1V9QejBMEoXwn-oGsREhOstT8jQ70Ksrj/view?usp=sharing,
  https://drive.google.com/file/d/1VfroevCptU4ifrnRaTcXXIVgjBK5Awo9/view?usp=sharing,
  https://drive.google.com/file/d/1Vq1VZ3Dp66-HAKZ0wghs-PS751E1kgzO/view?usp=sharing,
  https://drive.google.com/file/d/1X3Z8BtB6VeYO1IGi9zd9g8dTNdDmmepK/view?usp=sharing,
  https://drive.google.com/file/d/1XHvQs7PXU10sUYqJ4Kdpp0IgPWTamPM9/view?usp=sharing,
  https://drive.google.com/file/d/1XgQriVaHV7In90itYFCq2S5634ZfKYQS/view?usp=sharing,
  https://drive.google.com/file/d/1Xzi4_29FnhUJg4TrHKh13TNTGC9mLYW7/view?usp=sharing,
  https://drive.google.com/file/d/1Y0-xnqescslQyglTSa2vGHZhJ66b5g_7/view?usp=sharing,
  https://drive.google.com/file/d/1Y1PxQR0ZzUFUZIeG4yDAB33nfvNrDmit/view?usp=sharing,
  https://drive.google.com/file/d/1YVtNBJx1lLbZLHiAZzytGdB0oe62GFxS/view?usp=sharing,
  https://drive.google.com/file/d/1YiQq8fs_W15dWBPGcuLA2dnD99fxJMOL/view?usp=sharing,
  https://drive.google.com/file/d/1ZBk8swgjOvzgBJnHAMv0Hv2S3pT-J2B0/view?usp=sharing,
  https://drive.google.com/file/d/1ZG9x-RW7NRdC-yMRvcKkpr2jJtU0ZWWS/view?usp=sharing,
  https://drive.google.com/file/d/1ZN5cjna4_E-EqSql9emE06riSwuMygSx/view?usp=sharing,
  https://drive.google.com/file/d/1Ze66WKjGHI3TcXoYnSdy2FRlCSLNfbLV/view?usp=sharing,
  https://drive.google.com/file/d/1_42Ztno6ifGOUHe4ymB3dAsOhyhzdlxT/view?usp=sharing,
  https://drive.google.com/file/d/1_d1bWf2o5gE7Jg4Eu-WhoEjkxGiDW8mL/view?usp=sharing,
  https://drive.google.com/file/d/1a4jT-dkzkrffRvME265uSgnIsJf1NU-Z/view?usp=sharing,
  https://drive.google.com/file/d/1aGQzI9p0HRsfFUkKeNo1cH_Xy5vldJn1/view?usp=sharing,
  https://drive.google.com/file/d/1aQgTqgmFZH66CYOWCctZUoaJ3b58mtdF/view?usp=sharing,
  https://drive.google.com/file/d/1aQphoG44gFhx8KqOkl8hPxqOmXijq-Hp/view?usp=sharing,
  https://drive.google.com/file/d/1aaHe_wokaT8g5CpI5qSYJ85oikTBZml-/view?usp=sharing,
  https://drive.google.com/file/d/1agHaB9s20izkmByX3nxNhJCcieEDtspP/view?usp=sharing,
  https://drive.google.com/file/d/1bVKhNI3xHf9vEiFDSJGoSpcNXasqZNCb/view?usp=sharing,
  https://drive.google.com/file/d/1bp2q1PJvId0w5NpGYQ3IAZRTI_cEQiNU/view?usp=sharing,
  https://drive.google.com/file/d/1c-ZzYzEsevQf1D3W_5aPp6XJ0o_2hwLC/view?usp=sharing,
  https://drive.google.com/file/d/1ckX6U4EjVXzmXTdG7BuXjKVyxbSBsI_b/view?usp=sharing,
  https://drive.google.com/file/d/1d8WaGD5_xjskQtRyeaSv_3q2bOfCZqNz/view?usp=sharing,
  https://drive.google.com/file/d/1dF-iCy4TBf70eBzLjroKmz4jcd6YtgQW/view?usp=sharing,
  https://drive.google.com/file/d/1dK-7tYOfU-CSOaqGMZJ0118TYAOklKV_/view?usp=sharing,
  https://drive.google.com/file/d/1dOmhwxabNjLRP4eV7BrgGFtOaUbuOhal/view?usp=sharing,
  https://drive.google.com/file/d/1dldGGDYIqaFtSBvUOb-K606MvaHQThtE/view?usp=sharing,
  https://drive.google.com/file/d/1e-VLRkSb0dITHF_MygAbVN_9Ap9zB4Bt/view?usp=sharing,
  https://drive.google.com/file/d/1eURzH1d5TuLEifhsS38oPYlLrZa-M77J/view?usp=sharing,
  https://drive.google.com/file/d/1f4XQBtNhTnWVrfcevHO0LC26DqJD6uRm/view?usp=sharing,
  https://drive.google.com/file/d/1fnKxAF0BFXKFzrVmHnMkmb1MzZyzPp_D/view?usp=sharing,
  https://drive.google.com/file/d/1g9vrjZ-2-eRkmTy9DqBjlvgtr6sxjPlr/view?usp=sharing,
  https://drive.google.com/file/d/1gcSrjCjS3C5jYH-OqzWlp44TGgTA40HS/view?usp=sharing,
  https://drive.google.com/file/d/1ghUxq47C_nRCceXQ9pCdXNBNtOQhtL1H/view?usp=sharing,
  https://drive.google.com/file/d/1h-Mrnmhda5Hd5SWDC81UqOMv_Dxp1tIF/view?usp=sharing,
  https://drive.google.com/file/d/1hLq2GmgGw1jeBXye9O-gUyUOgiVL_rqC/view?usp=sharing,
  https://drive.google.com/file/d/1hN2sEp9OxoZy6oN2MUp_twvU_z2kKacL/view?usp=sharing,
  https://drive.google.com/file/d/1hZZYES3L1cIEU4eE9l9rHwUhhFXCh9Ae/view?usp=sharing,
  https://drive.google.com/file/d/1i3BNexCZJoF817Z0wduX5XcctT5p-Dlo/view?usp=sharing,
  https://drive.google.com/file/d/1i8MmDABr3ormeREvznLG3z6EfkoAz0w4/view?usp=sharing,
  https://drive.google.com/file/d/1iFq_XpvmhYiC5UKhWjpgtv9AQzKu7oEt/view?usp=sharing,
  https://drive.google.com/file/d/1j3FFnCPVTAAIq96B5HlSDYZox9-0opKy/view?usp=sharing,
  https://drive.google.com/file/d/1k-VBr2bzzhXjlPHnLopR8DDp9JUaf_Xz/view?usp=sharing,
  https://drive.google.com/file/d/1kjnJXQ-cq6f7Ac0vD_oDlXWbpOrNccOt/view?usp=sharing,
  https://drive.google.com/file/d/1l3U4XSbfwYy2aGrO66tz35YugbtIornc/view?usp=sharing,
  https://drive.google.com/file/d/1lAIDwSRqkSqKm2BXPTmpEuTrQWjNt68S/view?usp=sharing,
  https://drive.google.com/file/d/1lbb1rEUZmG8nVA8IycMkzo7vzSUdWuUW/view?usp=sharing,
  https://drive.google.com/file/d/1lcCj2-cqHgE3jxiUGtLpNx6Rn-QiBQGf/view?usp=sharing,
  https://drive.google.com/file/d/1lsUgrEr7BRzB_wsgcfazMpS_9NVwGDYD/view?usp=sharing,
  https://drive.google.com/file/d/1mpUxbrnETm9bR7M8O_WEMuh-g-tEd93Z/view?usp=sharing,
  https://drive.google.com/file/d/1nIUkl9PKosN8CTK4N4a2TaWlOvdeafRe/view?usp=sharing,
  https://drive.google.com/file/d/1nN2EUr2QFX7L1KaVHPcgUJdxN71hrRvn/view?usp=sharing,
  https://drive.google.com/file/d/1neN8lV0aFtePRJrG_ZqLzo_Ozqsm4J61/view?usp=sharing,
  https://drive.google.com/file/d/1oEzUh7QbdXJonPpttNafEmAXLz_5gQaE/view?usp=sharing,
  https://drive.google.com/file/d/1oYga8kK629x9HAS07FoCJPj-nH3k-xsq/view?usp=sharing,
  https://drive.google.com/file/d/1p9udKD6mYsxQ-W4drbFuLyS6OffiQWAU/view?usp=sharing,
  https://drive.google.com/file/d/1pDQ3Egjbc7BiVmb-lziLW8XbjX4NAJO1/view?usp=sharing,
  https://drive.google.com/file/d/1pgzZQ8twfZjIIWLG2dmTOILO-JMCMSeY/view?usp=sharing,
  https://drive.google.com/file/d/1pyGgMxnygiIXpbIfARi3ZMmwaPcZ02Ld/view?usp=sharing,
  https://drive.google.com/file/d/1q608MPfdgiK_wHcL_mmReglr9rFLKIkS/view?usp=sharing,
  https://drive.google.com/file/d/1qC5zJ0EMVTiH6H4Jnx3TfxCj5zWJqwxv/view?usp=sharing,
  https://drive.google.com/file/d/1qKrHq2tGOsQkFUPj3H4A9SP46JEimHq2/view?usp=sharing,
  https://drive.google.com/file/d/1qP3We146E_INqKwVsGOioYrN3RF55vc2/view?usp=sharing,
  https://drive.google.com/file/d/1q_qSIJtI6xhHh70FW-sZsLZ5Z3Ch9oT4/view?usp=sharing,
  https://drive.google.com/file/d/1qdNLSsh3UxtB3qvn-SMqtCXJ1euyyT_2/view?usp=sharing,
  https://drive.google.com/file/d/1r2cbajGxXCT3N5353N7mgZT4DlrosKbG/view?usp=sharing,
  https://drive.google.com/file/d/1rIBjSuxPrzt1fQ4PHosdXh1vdaT7I5rw/view?usp=sharing,
  https://drive.google.com/file/d/1rKJDvKKPU3NRqQdKVRTDKYQgUV611t6L/view?usp=sharing,
  https://drive.google.com/file/d/1s9nVQ3BsdayOH2ECvTi7i0GL2lSzUM6b/view?usp=sharing, 
  https://drive.google.com/file/d/1sWO2MxrmTMjQoElHX8VsSsv8cGmPbX-p/view?usp=sharing,
  https://drive.google.com/file/d/1s_f3CIL-dPs5_8LfYxbvdDJNQJ33oKon/view?usp=sharing,
  https://drive.google.com/file/d/1sn87bB3S5aH64GxYW0xtftTOLUVU9rci/view?usp=sharing, 
  https://drive.google.com/file/d/1tZQdPM7ONVoNlT0hXlkyfNo6C1V1T3ep/view?usp=sharing,
  https://drive.google.com/file/d/1tZaiL_VKAK0SCUO4-QASMKm495_qk6Uk/view?usp=sharing,
  https://drive.google.com/file/d/1tp3Nkg6qD-4lfw-UzZyjWRX2x6SAusU8/view?usp=sharing,
  https://drive.google.com/file/d/1tsrAOeKKWDeu2FLJRb4L1FSvfHT0WI7T/view?usp=sharing,
  https://drive.google.com/file/d/1uAEMT91EW9DapSfWIgT7vApjyHNIeMQZ/view?usp=sharing,
  https://drive.google.com/file/d/1ueB9HbeSs4CRdU7N02IrEdqSBtQbvDG3/view?usp=sharing,
  https://drive.google.com/file/d/1umBqKP4aRh6Ni8ZNOIIB-5kfqBBzMJna/view?usp=sharing,
  https://drive.google.com/file/d/1v5Tu6c1jA99esbWcrcHfxgrkKd6ANEGN/view?usp=sharing,
  https://drive.google.com/file/d/1v9-eSQlwcPtqs7J6k3t9J4eKIiF6hSSL/view?usp=sharing,
  https://drive.google.com/file/d/1vpCVD060N8yK07wHf4SlkLGe9QXHi_pz/view?usp=sharing,
  https://drive.google.com/file/d/1wX8BltHLI8mS2SwbpqpIzxPnsBsp7ta0/view?usp=sharing,
  https://drive.google.com/file/d/1whUu1PEdm-wwaU_MeXgdtMlo6OOxAHbL/view?usp=sharing,
  https://drive.google.com/file/d/1x1647KU3EWjl72jsaZo3Vr0RwV8qbfSd/view?usp=sharing,
  https://drive.google.com/file/d/1xaWgaTX6uiHqkHHgc-p5Cs8o_9TqQ5YI/view?usp=sharing,
  https://drive.google.com/file/d/1xj4LcFR3fvLM8i30OQU61BVoRMPQ1eb7/view?usp=sharing,
  https://drive.google.com/file/d/1xvuM34SwpwWY3K3k6D8do_8IYNbGgrMd/view?usp=sharing,
  https://drive.google.com/file/d/1xyAk4cROW5saPmZxCtz8imobMZnZ9Dc2/view?usp=sharing,
  https://drive.google.com/file/d/1xz5vSBm2ykKJCSYQiyFd5R4U42GSg_kZ/view?usp=sharing,
  https://drive.google.com/file/d/1ybetMAkwkSKLPCZw0JEXXeEhXJlYJb_s/view?usp=sharing,
  https://drive.google.com/file/d/1yzdxRrZpMvZ2ZEbRohD4UaOfmcvIAfYd/view?usp=sharing,
  https://drive.google.com/file/d/1zVTufuBNxPz7D7h_dxyEnCKgflx3QVw2/view?usp=sharing
];

// 2) čarovnija: iz /d/<ID>/view zgradi https://docs.google.com/uc?export=download&id=<ID>
const songs = viewLinks.map((link, idx) => {
  const match = link.match(/\\/d\\/([^/]+)\\/view/);
  const id = match ? match[1] : "";
  return {
    title: `Track ${idx + 1}`,      // ime lahko pozneje spremeniš v pravi naslov skladbe
    url:   `https://docs.google.com/uc?export=download&id=${id}`
  };
});

// 3) Export ali uporaba v tvojem playerju
// Če uporabljaš ločen modul:
export { songs };

// Če imaš vse v enem fajlu, samo pusti songs globalno in ga
// player (loadSong, nextSong …) uporablja kot prej.


let currentIndex = 0;
let randomMode = false;

const audio = document.getElementById("audio");
const titleEl = document.getElementById("song-title");

const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const shuffleBtn = document.getElementById("shuffle");

const playedTimestamps = {}; // index -> last played epoch seconds

function loadSong(index) {
  currentIndex = index;
  const song = songs[index];
  audio.src = song.url;
  titleEl.textContent = song.title;
  playBtn.textContent = "⏸️";
}

function playPause() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
  }
}

function nextSong() {
  let nextIndex;
  if (randomMode) {
    nextIndex = getNextRandomIndex();
  } else {
    nextIndex = (currentIndex + 1) % songs.length;
  }
  playedTimestamps[currentIndex] = Date.now() / 1000;
  loadSong(nextIndex);
  audio.play();
}

function prevSong() {
  const prevIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
  loadSong(prevIndex);
  audio.play();
}

function toggleShuffle() {
  randomMode = !randomMode;
  shuffleBtn.style.background = randomMode ? "#00ff00" : "#ff00ff";
}

function getNextRandomIndex() {
  const now = Date.now() / 1000;
  const candidates = songs.map((_, i) => i).filter(i => {
    const last = playedTimestamps[i] || 0;
    return (now - last) > 3600; // 3600 seconds = 1 hour
  });

  const pool = candidates.length ? candidates : songs.map((_, i) => i);

  let idx;
  do {
    idx = pool[Math.floor(Math.random() * pool.length)];
  } while (idx === currentIndex && pool.length > 1);

  return idx;
}

audio.addEventListener("ended", nextSong);

prevBtn.addEventListener("click", prevSong);
playBtn.addEventListener("click", playPause);
nextBtn.addEventListener("click", nextSong);
shuffleBtn.addEventListener("click", toggleShuffle);

// Init
loadSong(0);
