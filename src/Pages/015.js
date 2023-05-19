import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const Fifteen = () => {
  return (
    <div>
      <Helmet>
        <title>015 - سورة الحجر</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الحجر</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          الٓرۚ تِلۡكَ ءَايَٰتُ ٱلۡكِتَٰبِ وَقُرۡءَانٖ مُّبِينٖ 
          <span className="numberTheme"> (1) </span> رُّبَمَا
          يَوَدُّ ٱلَّذِينَ كَفَرُواْ لَوۡ كَانُواْ مُسۡلِمِينَ 
          <span className="numberTheme"> (2) </span> ذَرۡهُمۡ
          يَأۡكُلُواْ وَيَتَمَتَّعُواْ وَيُلۡهِهِمُ ٱلۡأَمَلُۖ فَسَوۡفَ
          يَعۡلَمُونَ 
          <span className="numberTheme"> (3) </span> وَمَآ أَهۡلَكۡنَا مِن قَرۡيَةٍ إِلَّا وَلَهَا كِتَابٞ
          مَّعۡلُومٞ 
          <span className="numberTheme"> (4) </span> مَّا تَسۡبِقُ مِنۡ أُمَّةٍ أَجَلَهَا وَمَا
          يَسۡتَـٔۡخِرُونَ 
          <span className="numberTheme"> (5) </span> وَقَالُواْ يَٰٓأَيُّهَا ٱلَّذِي نُزِّلَ عَلَيۡهِ
          ٱلذِّكۡرُ إِنَّكَ لَمَجۡنُونٞ 
          <span className="numberTheme"> (6) </span> لَّوۡ مَا تَأۡتِينَا
          بِٱلۡمَلَٰٓئِكَةِ إِن كُنتَ مِنَ ٱلصَّٰدِقِينَ 
          <span className="numberTheme"> (7) </span> مَا نُنَزِّلُ
          ٱلۡمَلَٰٓئِكَةَ إِلَّا بِٱلۡحَقِّ وَمَا كَانُوٓاْ إِذٗا مُّنظَرِينَ
          
          <span className="numberTheme"> (8) </span> إِنَّا نَحۡنُ نَزَّلۡنَا ٱلذِّكۡرَ وَإِنَّا لَهُۥ لَحَٰفِظُونَ 
          <span className="numberTheme"> (9) </span>
          وَلَقَدۡ أَرۡسَلۡنَا مِن قَبۡلِكَ فِي شِيَعِ ٱلۡأَوَّلِينَ 
          <span className="numberTheme"> (10) </span> وَمَا
          يَأۡتِيهِم مِّن رَّسُولٍ إِلَّا كَانُواْ بِهِۦ يَسۡتَهۡزِءُونَ 
          <span className="numberTheme"> (11) </span>
          كَذَٰلِكَ نَسۡلُكُهُۥ فِي قُلُوبِ ٱلۡمُجۡرِمِينَ 
          <span className="numberTheme"> (12) </span> لَا يُؤۡمِنُونَ
          بِهِۦ وَقَدۡ خَلَتۡ سُنَّةُ ٱلۡأَوَّلِينَ 
          <span className="numberTheme"> (13) </span> وَلَوۡ فَتَحۡنَا
          عَلَيۡهِم بَابٗا مِّنَ ٱلسَّمَآءِ فَظَلُّواْ فِيهِ يَعۡرُجُونَ 
          <span className="numberTheme"> (14) </span>
          لَقَالُوٓاْ إِنَّمَا سُكِّرَتۡ أَبۡصَٰرُنَا بَلۡ نَحۡنُ قَوۡمٞ
          مَّسۡحُورُونَ 
          <span className="numberTheme"> (15) </span> وَلَقَدۡ جَعَلۡنَا فِي ٱلسَّمَآءِ بُرُوجٗا
          وَزَيَّنَّٰهَا لِلنَّٰظِرِينَ 
          <span className="numberTheme"> (16) </span> وَحَفِظۡنَٰهَا مِن كُلِّ شَيۡطَٰنٖ
          رَّجِيمٍ 
          <span className="numberTheme"> (17) </span> إِلَّا مَنِ ٱسۡتَرَقَ ٱلسَّمۡعَ فَأَتۡبَعَهُۥ شِهَابٞ
          مُّبِينٞ 
          <span className="numberTheme"> (18) </span> وَٱلۡأَرۡضَ مَدَدۡنَٰهَا وَأَلۡقَيۡنَا فِيهَا رَوَٰسِيَ
          وَأَنۢبَتۡنَا فِيهَا مِن كُلِّ شَيۡءٖ مَّوۡزُونٖ 
          <span className="numberTheme"> (19) </span> وَجَعَلۡنَا
          لَكُمۡ فِيهَا مَعَٰيِشَ وَمَن لَّسۡتُمۡ لَهُۥ بِرَٰزِقِينَ 
          <span className="numberTheme"> (20) </span> وَإِن
          مِّن شَيۡءٍ إِلَّا عِندَنَا خَزَآئِنُهُۥ وَمَا نُنَزِّلُهُۥٓ إِلَّا
          بِقَدَرٖ مَّعۡلُومٖ 
          <span className="numberTheme"> (21) </span> وَأَرۡسَلۡنَا ٱلرِّيَٰحَ لَوَٰقِحَ
          فَأَنزَلۡنَا مِنَ ٱلسَّمَآءِ مَآءٗ فَأَسۡقَيۡنَٰكُمُوهُ وَمَآ
          أَنتُمۡ لَهُۥ بِخَٰزِنِينَ 
          <span className="numberTheme"> (22) </span> وَإِنَّا لَنَحۡنُ نُحۡيِۦ وَنُمِيتُ
          وَنَحۡنُ ٱلۡوَٰرِثُونَ 
          <span className="numberTheme"> (23) </span> وَلَقَدۡ عَلِمۡنَا ٱلۡمُسۡتَقۡدِمِينَ
          مِنكُمۡ وَلَقَدۡ عَلِمۡنَا ٱلۡمُسۡتَـٔۡخِرِينَ 
          <span className="numberTheme"> (24) </span> وَإِنَّ رَبَّكَ
          هُوَ يَحۡشُرُهُمۡۚ إِنَّهُۥ حَكِيمٌ عَلِيمٞ 
          <span className="numberTheme"> (25) </span> وَلَقَدۡ خَلَقۡنَا
          ٱلۡإِنسَٰنَ مِن صَلۡصَٰلٖ مِّنۡ حَمَإٖ مَّسۡنُونٖ 
          <span className="numberTheme"> (26) </span> وَٱلۡجَآنَّ
          خَلَقۡنَٰهُ مِن قَبۡلُ مِن نَّارِ ٱلسَّمُومِ 
          <span className="numberTheme"> (27) </span> وَإِذۡ قَالَ رَبُّكَ
          لِلۡمَلَٰٓئِكَةِ إِنِّي خَٰلِقُۢ بَشَرٗا مِّن صَلۡصَٰلٖ مِّنۡ حَمَإٖ
          مَّسۡنُونٖ 
          <span className="numberTheme"> (28) </span> فَإِذَا سَوَّيۡتُهُۥ وَنَفَخۡتُ فِيهِ مِن رُّوحِي
          فَقَعُواْ لَهُۥ سَٰجِدِينَ 
          <span className="numberTheme"> (29) </span> فَسَجَدَ ٱلۡمَلَٰٓئِكَةُ كُلُّهُمۡ
          أَجۡمَعُونَ 
          <span className="numberTheme"> (30) </span> إِلَّآ إِبۡلِيسَ أَبَىٰٓ أَن يَكُونَ مَعَ
          ٱلسَّٰجِدِينَ 
          <span className="numberTheme"> (31) </span> قَالَ يَٰٓإِبۡلِيسُ مَا لَكَ أَلَّا تَكُونَ مَعَ
          ٱلسَّٰجِدِينَ 
          <span className="numberTheme"> (32) </span> قَالَ لَمۡ أَكُن لِّأَسۡجُدَ لِبَشَرٍ خَلَقۡتَهُۥ
          مِن صَلۡصَٰلٖ مِّنۡ حَمَإٖ مَّسۡنُونٖ 
          <span className="numberTheme"> (33) </span> قَالَ فَٱخۡرُجۡ مِنۡهَا
          فَإِنَّكَ رَجِيمٞ 
          <span className="numberTheme"> (34) </span> وَإِنَّ عَلَيۡكَ ٱللَّعۡنَةَ إِلَىٰ يَوۡمِ
          ٱلدِّينِ 
          <span className="numberTheme"> (35) </span> قَالَ رَبِّ فَأَنظِرۡنِيٓ إِلَىٰ يَوۡمِ يُبۡعَثُونَ 
          <span className="numberTheme"> (36) </span>
          قَالَ فَإِنَّكَ مِنَ ٱلۡمُنظَرِينَ 
          <span className="numberTheme"> (37) </span> إِلَىٰ يَوۡمِ ٱلۡوَقۡتِ
          ٱلۡمَعۡلُومِ 
          <span className="numberTheme"> (38) </span> قَالَ رَبِّ بِمَآ أَغۡوَيۡتَنِي لَأُزَيِّنَنَّ
          لَهُمۡ فِي ٱلۡأَرۡضِ وَلَأُغۡوِيَنَّهُمۡ أَجۡمَعِينَ 
          <span className="numberTheme"> (39) </span> إِلَّا
          عِبَادَكَ مِنۡهُمُ ٱلۡمُخۡلَصِينَ 
          <span className="numberTheme"> (40) </span> قَالَ هَٰذَا صِرَٰطٌ عَلَيَّ
          مُسۡتَقِيمٌ 
          <span className="numberTheme"> (41) </span> إِنَّ عِبَادِي لَيۡسَ لَكَ عَلَيۡهِمۡ سُلۡطَٰنٌ
          إِلَّا مَنِ ٱتَّبَعَكَ مِنَ ٱلۡغَاوِينَ 
          <span className="numberTheme"> (42) </span> وَإِنَّ جَهَنَّمَ
          لَمَوۡعِدُهُمۡ أَجۡمَعِينَ 
          <span className="numberTheme"> (43) </span> لَهَا سَبۡعَةُ أَبۡوَٰبٖ لِّكُلِّ
          بَابٖ مِّنۡهُمۡ جُزۡءٞ مَّقۡسُومٌ 
          <span className="numberTheme"> (44) </span> إِنَّ ٱلۡمُتَّقِينَ فِي
          جَنَّٰتٖ وَعُيُونٍ 
          <span className="numberTheme"> (45) </span> ٱدۡخُلُوهَا بِسَلَٰمٍ ءَامِنِينَ 
          <span className="numberTheme"> (46) </span>
          وَنَزَعۡنَا مَا فِي صُدُورِهِم مِّنۡ غِلٍّ إِخۡوَٰنًا عَلَىٰ سُرُرٖ
          مُّتَقَٰبِلِينَ 
          <span className="numberTheme"> (47) </span> لَا يَمَسُّهُمۡ فِيهَا نَصَبٞ وَمَا هُم مِّنۡهَا
          بِمُخۡرَجِينَ 
          <span className="numberTheme"> (48) </span> 
          <span className="partTheme"> ۞ </span>نَبِّئۡ عِبَادِيٓ أَنِّيٓ أَنَا ٱلۡغَفُورُ
          ٱلرَّحِيمُ 
          <span className="numberTheme"> (49) </span> وَأَنَّ عَذَابِي هُوَ ٱلۡعَذَابُ ٱلۡأَلِيمُ 
          <span className="numberTheme"> (50) </span>
          وَنَبِّئۡهُمۡ عَن ضَيۡفِ إِبۡرَٰهِيمَ 
          <span className="numberTheme"> (51) </span> إِذۡ دَخَلُواْ عَلَيۡهِ
          فَقَالُواْ سَلَٰمٗا قَالَ إِنَّا مِنكُمۡ وَجِلُونَ 
          <span className="numberTheme"> (52) </span> قَالُواْ لَا
          تَوۡجَلۡ إِنَّا نُبَشِّرُكَ بِغُلَٰمٍ عَلِيمٖ 
          <span className="numberTheme"> (53) </span> قَالَ
          أَبَشَّرۡتُمُونِي عَلَىٰٓ أَن مَّسَّنِيَ ٱلۡكِبَرُ فَبِمَ تُبَشِّرُونَ
          
          <span className="numberTheme"> (54) </span> قَالُواْ بَشَّرۡنَٰكَ بِٱلۡحَقِّ فَلَا تَكُن مِّنَ ٱلۡقَٰنِطِينَ
          
          <span className="numberTheme"> (55) </span> قَالَ وَمَن يَقۡنَطُ مِن رَّحۡمَةِ رَبِّهِۦٓ إِلَّا ٱلضَّآلُّونَ
          
          <span className="numberTheme"> (56) </span> قَالَ فَمَا خَطۡبُكُمۡ أَيُّهَا ٱلۡمُرۡسَلُونَ 
          <span className="numberTheme"> (57) </span> قَالُوٓاْ
          إِنَّآ أُرۡسِلۡنَآ إِلَىٰ قَوۡمٖ مُّجۡرِمِينَ 
          <span className="numberTheme"> (58) </span> إِلَّآ ءَالَ
          لُوطٍ إِنَّا لَمُنَجُّوهُمۡ أَجۡمَعِينَ 
          <span className="numberTheme"> (59) </span> إِلَّا ٱمۡرَأَتَهُۥ
          قَدَّرۡنَآ إِنَّهَا لَمِنَ ٱلۡغَٰبِرِينَ 
          <span className="numberTheme"> (60) </span> فَلَمَّا جَآءَ ءَالَ
          لُوطٍ ٱلۡمُرۡسَلُونَ 
          <span className="numberTheme"> (61) </span> قَالَ إِنَّكُمۡ قَوۡمٞ مُّنكَرُونَ 
          <span className="numberTheme"> (62) </span>
          قَالُواْ بَلۡ جِئۡنَٰكَ بِمَا كَانُواْ فِيهِ يَمۡتَرُونَ 
          <span className="numberTheme"> (63) </span>
          وَأَتَيۡنَٰكَ بِٱلۡحَقِّ وَإِنَّا لَصَٰدِقُونَ 
          <span className="numberTheme"> (64) </span> فَأَسۡرِ
          بِأَهۡلِكَ بِقِطۡعٖ مِّنَ ٱلَّيۡلِ وَٱتَّبِعۡ أَدۡبَٰرَهُمۡ وَلَا
          يَلۡتَفِتۡ مِنكُمۡ أَحَدٞ وَٱمۡضُواْ حَيۡثُ تُؤۡمَرُونَ 
          <span className="numberTheme"> (65) </span>
          وَقَضَيۡنَآ إِلَيۡهِ ذَٰلِكَ ٱلۡأَمۡرَ أَنَّ دَابِرَ هَٰٓؤُلَآءِ
          مَقۡطُوعٞ مُّصۡبِحِينَ 
          <span className="numberTheme"> (66) </span> وَجَآءَ أَهۡلُ ٱلۡمَدِينَةِ
          يَسۡتَبۡشِرُونَ 
          <span className="numberTheme"> (67) </span> قَالَ إِنَّ هَٰٓؤُلَآءِ ضَيۡفِي فَلَا
          تَفۡضَحُونِ 
          <span className="numberTheme"> (68) </span> وَٱتَّقُواْ ٱللَّهَ وَلَا تُخۡزُونِ 
          <span className="numberTheme"> (69) </span> قَالُوٓاْ
          أَوَ لَمۡ نَنۡهَكَ عَنِ ٱلۡعَٰلَمِينَ 
          <span className="numberTheme"> (70) </span> قَالَ هَٰٓؤُلَآءِ
          بَنَاتِيٓ إِن كُنتُمۡ فَٰعِلِينَ 
          <span className="numberTheme"> (71) </span> لَعَمۡرُكَ إِنَّهُمۡ لَفِي
          سَكۡرَتِهِمۡ يَعۡمَهُونَ 
          <span className="numberTheme"> (72) </span> فَأَخَذَتۡهُمُ ٱلصَّيۡحَةُ مُشۡرِقِينَ
          
          <span className="numberTheme"> (73) </span> فَجَعَلۡنَا عَٰلِيَهَا سَافِلَهَا وَأَمۡطَرۡنَا عَلَيۡهِمۡ
          حِجَارَةٗ مِّن سِجِّيلٍ 
          <span className="numberTheme"> (74) </span> إِنَّ فِي ذَٰلِكَ لَأٓيَٰتٖ
          لِّلۡمُتَوَسِّمِينَ 
          <span className="numberTheme"> (75) </span> وَإِنَّهَا لَبِسَبِيلٖ مُّقِيمٍ 
          <span className="numberTheme"> (76) </span> إِنَّ
          فِي ذَٰلِكَ لَأٓيَةٗ لِّلۡمُؤۡمِنِينَ 
          <span className="numberTheme"> (77) </span> وَإِن كَانَ أَصۡحَٰبُ
          ٱلۡأَيۡكَةِ لَظَٰلِمِينَ 
          <span className="numberTheme"> (78) </span> فَٱنتَقَمۡنَا مِنۡهُمۡ وَإِنَّهُمَا
          لَبِإِمَامٖ مُّبِينٖ 
          <span className="numberTheme"> (79) </span> وَلَقَدۡ كَذَّبَ أَصۡحَٰبُ ٱلۡحِجۡرِ
          ٱلۡمُرۡسَلِينَ 
          <span className="numberTheme"> (80) </span> وَءَاتَيۡنَٰهُمۡ ءَايَٰتِنَا فَكَانُواْ عَنۡهَا
          مُعۡرِضِينَ 
          <span className="numberTheme"> (81) </span> وَكَانُواْ يَنۡحِتُونَ مِنَ ٱلۡجِبَالِ بُيُوتًا
          ءَامِنِينَ 
          <span className="numberTheme"> (82) </span> فَأَخَذَتۡهُمُ ٱلصَّيۡحَةُ مُصۡبِحِينَ 
          <span className="numberTheme"> (83) </span> فَمَآ
          أَغۡنَىٰ عَنۡهُم مَّا كَانُواْ يَكۡسِبُونَ 
          <span className="numberTheme"> (84) </span> وَمَا خَلَقۡنَا
          ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ وَمَا بَيۡنَهُمَآ إِلَّا بِٱلۡحَقِّۗ
          وَإِنَّ ٱلسَّاعَةَ لَأٓتِيَةٞۖ فَٱصۡفَحِ ٱلصَّفۡحَ ٱلۡجَمِيلَ 
          <span className="numberTheme"> (85) </span>
          إِنَّ رَبَّكَ هُوَ ٱلۡخَلَّٰقُ ٱلۡعَلِيمُ 
          <span className="numberTheme"> (86) </span> وَلَقَدۡ ءَاتَيۡنَٰكَ
          سَبۡعٗا مِّنَ ٱلۡمَثَانِي وَٱلۡقُرۡءَانَ ٱلۡعَظِيمَ 
          <span className="numberTheme"> (87) </span> لَا
          تَمُدَّنَّ عَيۡنَيۡكَ إِلَىٰ مَا مَتَّعۡنَا بِهِۦٓ أَزۡوَٰجٗا
          مِّنۡهُمۡ وَلَا تَحۡزَنۡ عَلَيۡهِمۡ وَٱخۡفِضۡ جَنَاحَكَ
          لِلۡمُؤۡمِنِينَ 
          <span className="numberTheme"> (88) </span> وَقُلۡ إِنِّيٓ أَنَا ٱلنَّذِيرُ ٱلۡمُبِينُ 
          <span className="numberTheme"> (89) </span>
          كَمَآ أَنزَلۡنَا عَلَى ٱلۡمُقۡتَسِمِينَ 
          <span className="numberTheme"> (90) </span> ٱلَّذِينَ جَعَلُواْ
          ٱلۡقُرۡءَانَ عِضِينَ 
          <span className="numberTheme"> (91) </span> فَوَرَبِّكَ لَنَسۡـَٔلَنَّهُمۡ أَجۡمَعِينَ
          
          <span className="numberTheme"> (92) </span> عَمَّا كَانُواْ يَعۡمَلُونَ 
          <span className="numberTheme"> (93) </span> فَٱصۡدَعۡ بِمَا تُؤۡمَرُ
          وَأَعۡرِضۡ عَنِ ٱلۡمُشۡرِكِينَ 
          <span className="numberTheme"> (94) </span> إِنَّا كَفَيۡنَٰكَ
          ٱلۡمُسۡتَهۡزِءِينَ 
          <span className="numberTheme"> (95) </span> ٱلَّذِينَ يَجۡعَلُونَ مَعَ ٱللَّهِ إِلَٰهًا
          ءَاخَرَۚ فَسَوۡفَ يَعۡلَمُونَ 
          <span className="numberTheme"> (96) </span> وَلَقَدۡ نَعۡلَمُ أَنَّكَ يَضِيقُ
          صَدۡرُكَ بِمَا يَقُولُونَ 
          <span className="numberTheme"> (97) </span> فَسَبِّحۡ بِحَمۡدِ رَبِّكَ وَكُن مِّنَ
          ٱلسَّٰجِدِينَ 
          <span className="numberTheme"> (98) </span> وَٱعۡبُدۡ رَبَّكَ حَتَّىٰ يَأۡتِيَكَ ٱلۡيَقِينُ
          
          <span className="numberTheme"> (99) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default Fifteen;