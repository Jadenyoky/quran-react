import React from 'react';
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const Seven = () => {
  return (
    <div>
      <Helmet>
        <title>007 - سورة الأعراف</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الأعراف</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          الٓمٓصٓ (1) كِتَٰبٌ أُنزِلَ إِلَيۡكَ فَلَا يَكُن فِي صَدۡرِكَ حَرَجٞ مِّنۡهُ لِتُنذِرَ بِهِۦ وَذِكۡرَىٰ لِلۡمُؤۡمِنِينَ (2) ٱتَّبِعُواْ مَآ أُنزِلَ إِلَيۡكُم مِّن رَّبِّكُمۡ وَلَا تَتَّبِعُواْ مِن دُونِهِۦٓ أَوۡلِيَآءَۗ قَلِيلٗا مَّا تَذَكَّرُونَ (3) وَكَم مِّن قَرۡيَةٍ أَهۡلَكۡنَٰهَا فَجَآءَهَا بَأۡسُنَا بَيَٰتًا أَوۡ هُمۡ قَآئِلُونَ (4) فَمَا كَانَ دَعۡوَىٰهُمۡ إِذۡ جَآءَهُم بَأۡسُنَآ إِلَّآ أَن قَالُوٓاْ إِنَّا كُنَّا ظَٰلِمِينَ (5) فَلَنَسۡـَٔلَنَّ ٱلَّذِينَ أُرۡسِلَ إِلَيۡهِمۡ وَلَنَسۡـَٔلَنَّ ٱلۡمُرۡسَلِينَ (6) فَلَنَقُصَّنَّ عَلَيۡهِم بِعِلۡمٖۖ وَمَا كُنَّا غَآئِبِينَ (7) وَٱلۡوَزۡنُ يَوۡمَئِذٍ ٱلۡحَقُّۚ فَمَن ثَقُلَتۡ مَوَٰزِينُهُۥ فَأُوْلَٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ (8) وَمَنۡ خَفَّتۡ مَوَٰزِينُهُۥ فَأُوْلَٰٓئِكَ ٱلَّذِينَ خَسِرُوٓاْ أَنفُسَهُم بِمَا كَانُواْ بِـَٔايَٰتِنَا يَظۡلِمُونَ (9) وَلَقَدۡ مَكَّنَّٰكُمۡ فِي ٱلۡأَرۡضِ وَجَعَلۡنَا لَكُمۡ فِيهَا مَعَٰيِشَۗ قَلِيلٗا مَّا تَشۡكُرُونَ (10) وَلَقَدۡ خَلَقۡنَٰكُمۡ ثُمَّ صَوَّرۡنَٰكُمۡ ثُمَّ قُلۡنَا لِلۡمَلَٰٓئِكَةِ ٱسۡجُدُواْ لِأٓدَمَ فَسَجَدُوٓاْ إِلَّآ إِبۡلِيسَ لَمۡ يَكُن مِّنَ ٱلسَّٰجِدِينَ (11) قَالَ مَا مَنَعَكَ أَلَّا تَسۡجُدَ إِذۡ أَمَرۡتُكَۖ قَالَ أَنَا۠ خَيۡرٞ مِّنۡهُ خَلَقۡتَنِي مِن نَّارٖ وَخَلَقۡتَهُۥ مِن طِينٖ (12) قَالَ فَٱهۡبِطۡ مِنۡهَا فَمَا يَكُونُ لَكَ أَن تَتَكَبَّرَ فِيهَا فَٱخۡرُجۡ إِنَّكَ مِنَ ٱلصَّٰغِرِينَ (13) قَالَ أَنظِرۡنِيٓ إِلَىٰ يَوۡمِ يُبۡعَثُونَ (14) قَالَ إِنَّكَ مِنَ ٱلۡمُنظَرِينَ (15) قَالَ فَبِمَآ أَغۡوَيۡتَنِي لَأَقۡعُدَنَّ لَهُمۡ صِرَٰطَكَ ٱلۡمُسۡتَقِيمَ (16) ثُمَّ لَأٓتِيَنَّهُم مِّنۢ بَيۡنِ أَيۡدِيهِمۡ وَمِنۡ خَلۡفِهِمۡ وَعَنۡ أَيۡمَٰنِهِمۡ وَعَن شَمَآئِلِهِمۡۖ وَلَا تَجِدُ أَكۡثَرَهُمۡ شَٰكِرِينَ (17) قَالَ ٱخۡرُجۡ مِنۡهَا مَذۡءُومٗا مَّدۡحُورٗاۖ لَّمَن تَبِعَكَ مِنۡهُمۡ لَأَمۡلَأَنَّ جَهَنَّمَ مِنكُمۡ أَجۡمَعِينَ (18) وَيَٰٓـَٔادَمُ ٱسۡكُنۡ أَنتَ وَزَوۡجُكَ ٱلۡجَنَّةَ فَكُلَا مِنۡ حَيۡثُ شِئۡتُمَا وَلَا تَقۡرَبَا هَٰذِهِ ٱلشَّجَرَةَ فَتَكُونَا مِنَ ٱلظَّٰلِمِينَ (19) فَوَسۡوَسَ لَهُمَا ٱلشَّيۡطَٰنُ لِيُبۡدِيَ لَهُمَا مَا وُۥرِيَ عَنۡهُمَا مِن سَوۡءَٰتِهِمَا وَقَالَ مَا نَهَىٰكُمَا رَبُّكُمَا عَنۡ هَٰذِهِ ٱلشَّجَرَةِ إِلَّآ أَن تَكُونَا مَلَكَيۡنِ أَوۡ تَكُونَا مِنَ ٱلۡخَٰلِدِينَ (20) وَقَاسَمَهُمَآ إِنِّي لَكُمَا لَمِنَ ٱلنَّٰصِحِينَ (21) فَدَلَّىٰهُمَا بِغُرُورٖۚ فَلَمَّا ذَاقَا ٱلشَّجَرَةَ بَدَتۡ لَهُمَا سَوۡءَٰتُهُمَا وَطَفِقَا يَخۡصِفَانِ عَلَيۡهِمَا مِن وَرَقِ ٱلۡجَنَّةِۖ وَنَادَىٰهُمَا رَبُّهُمَآ أَلَمۡ أَنۡهَكُمَا عَن تِلۡكُمَا ٱلشَّجَرَةِ وَأَقُل لَّكُمَآ إِنَّ ٱلشَّيۡطَٰنَ لَكُمَا عَدُوّٞ مُّبِينٞ (22) قَالَا رَبَّنَا ظَلَمۡنَآ أَنفُسَنَا وَإِن لَّمۡ تَغۡفِرۡ لَنَا وَتَرۡحَمۡنَا لَنَكُونَنَّ مِنَ ٱلۡخَٰسِرِينَ (23) قَالَ ٱهۡبِطُواْ بَعۡضُكُمۡ لِبَعۡضٍ عَدُوّٞۖ وَلَكُمۡ فِي ٱلۡأَرۡضِ مُسۡتَقَرّٞ وَمَتَٰعٌ إِلَىٰ حِينٖ (24) قَالَ فِيهَا تَحۡيَوۡنَ وَفِيهَا تَمُوتُونَ وَمِنۡهَا تُخۡرَجُونَ (25) يَٰبَنِيٓ ءَادَمَ قَدۡ أَنزَلۡنَا عَلَيۡكُمۡ لِبَاسٗا يُوَٰرِي سَوۡءَٰتِكُمۡ وَرِيشٗاۖ وَلِبَاسُ ٱلتَّقۡوَىٰ ذَٰلِكَ خَيۡرٞۚ ذَٰلِكَ مِنۡ ءَايَٰتِ ٱللَّهِ لَعَلَّهُمۡ يَذَّكَّرُونَ (26) يَٰبَنِيٓ ءَادَمَ لَا يَفۡتِنَنَّكُمُ ٱلشَّيۡطَٰنُ كَمَآ أَخۡرَجَ أَبَوَيۡكُم مِّنَ ٱلۡجَنَّةِ يَنزِعُ عَنۡهُمَا لِبَاسَهُمَا لِيُرِيَهُمَا سَوۡءَٰتِهِمَآۚ إِنَّهُۥ يَرَىٰكُمۡ هُوَ وَقَبِيلُهُۥ مِنۡ حَيۡثُ لَا تَرَوۡنَهُمۡۗ إِنَّا جَعَلۡنَا ٱلشَّيَٰطِينَ أَوۡلِيَآءَ لِلَّذِينَ لَا يُؤۡمِنُونَ (27) وَإِذَا فَعَلُواْ فَٰحِشَةٗ قَالُواْ وَجَدۡنَا عَلَيۡهَآ ءَابَآءَنَا وَٱللَّهُ أَمَرَنَا بِهَاۗ قُلۡ إِنَّ ٱللَّهَ لَا يَأۡمُرُ بِٱلۡفَحۡشَآءِۖ أَتَقُولُونَ عَلَى ٱللَّهِ مَا لَا تَعۡلَمُونَ (28) قُلۡ أَمَرَ رَبِّي بِٱلۡقِسۡطِۖ وَأَقِيمُواْ وُجُوهَكُمۡ عِندَ كُلِّ مَسۡجِدٖ وَٱدۡعُوهُ مُخۡلِصِينَ لَهُ ٱلدِّينَۚ كَمَا بَدَأَكُمۡ تَعُودُونَ (29) فَرِيقًا هَدَىٰ وَفَرِيقًا حَقَّ عَلَيۡهِمُ ٱلضَّلَٰلَةُۚ إِنَّهُمُ ٱتَّخَذُواْ ٱلشَّيَٰطِينَ أَوۡلِيَآءَ مِن دُونِ ٱللَّهِ وَيَحۡسَبُونَ أَنَّهُم مُّهۡتَدُونَ (30) ۞يَٰبَنِيٓ ءَادَمَ خُذُواْ زِينَتَكُمۡ عِندَ كُلِّ مَسۡجِدٖ وَكُلُواْ وَٱشۡرَبُواْ وَلَا تُسۡرِفُوٓاْۚ إِنَّهُۥ لَا يُحِبُّ ٱلۡمُسۡرِفِينَ (31) قُلۡ مَنۡ حَرَّمَ زِينَةَ ٱللَّهِ ٱلَّتِيٓ أَخۡرَجَ لِعِبَادِهِۦ وَٱلطَّيِّبَٰتِ مِنَ ٱلرِّزۡقِۚ قُلۡ هِيَ لِلَّذِينَ ءَامَنُواْ فِي ٱلۡحَيَوٰةِ ٱلدُّنۡيَا خَالِصَةٗ يَوۡمَ ٱلۡقِيَٰمَةِۗ كَذَٰلِكَ نُفَصِّلُ ٱلۡأٓيَٰتِ لِقَوۡمٖ يَعۡلَمُونَ (32) قُلۡ إِنَّمَا حَرَّمَ رَبِّيَ ٱلۡفَوَٰحِشَ مَا ظَهَرَ مِنۡهَا وَمَا بَطَنَ وَٱلۡإِثۡمَ وَٱلۡبَغۡيَ بِغَيۡرِ ٱلۡحَقِّ وَأَن تُشۡرِكُواْ بِٱللَّهِ مَا لَمۡ يُنَزِّلۡ بِهِۦ سُلۡطَٰنٗا وَأَن تَقُولُواْ عَلَى ٱللَّهِ مَا لَا تَعۡلَمُونَ (33) وَلِكُلِّ أُمَّةٍ أَجَلٞۖ فَإِذَا جَآءَ أَجَلُهُمۡ لَا يَسۡتَأۡخِرُونَ سَاعَةٗ وَلَا يَسۡتَقۡدِمُونَ (34) يَٰبَنِيٓ ءَادَمَ إِمَّا يَأۡتِيَنَّكُمۡ رُسُلٞ مِّنكُمۡ يَقُصُّونَ عَلَيۡكُمۡ ءَايَٰتِي فَمَنِ ٱتَّقَىٰ وَأَصۡلَحَ فَلَا خَوۡفٌ عَلَيۡهِمۡ وَلَا هُمۡ يَحۡزَنُونَ (35) وَٱلَّذِينَ كَذَّبُواْ بِـَٔايَٰتِنَا وَٱسۡتَكۡبَرُواْ عَنۡهَآ أُوْلَٰٓئِكَ أَصۡحَٰبُ ٱلنَّارِۖ هُمۡ فِيهَا خَٰلِدُونَ (36) فَمَنۡ أَظۡلَمُ مِمَّنِ ٱفۡتَرَىٰ عَلَى ٱللَّهِ كَذِبًا أَوۡ كَذَّبَ بِـَٔايَٰتِهِۦٓۚ أُوْلَٰٓئِكَ يَنَالُهُمۡ نَصِيبُهُم مِّنَ ٱلۡكِتَٰبِۖ حَتَّىٰٓ إِذَا جَآءَتۡهُمۡ رُسُلُنَا يَتَوَفَّوۡنَهُمۡ قَالُوٓاْ أَيۡنَ مَا كُنتُمۡ تَدۡعُونَ مِن دُونِ ٱللَّهِۖ قَالُواْ ضَلُّواْ عَنَّا وَشَهِدُواْ عَلَىٰٓ أَنفُسِهِمۡ أَنَّهُمۡ كَانُواْ كَٰفِرِينَ (37) قَالَ ٱدۡخُلُواْ فِيٓ أُمَمٖ قَدۡ خَلَتۡ مِن قَبۡلِكُم مِّنَ ٱلۡجِنِّ وَٱلۡإِنسِ فِي ٱلنَّارِۖ كُلَّمَا دَخَلَتۡ أُمَّةٞ لَّعَنَتۡ أُخۡتَهَاۖ حَتَّىٰٓ إِذَا ٱدَّارَكُواْ فِيهَا جَمِيعٗا قَالَتۡ أُخۡرَىٰهُمۡ لِأُولَىٰهُمۡ رَبَّنَا هَٰٓؤُلَآءِ أَضَلُّونَا فَـَٔاتِهِمۡ عَذَابٗا ضِعۡفٗا مِّنَ ٱلنَّارِۖ قَالَ لِكُلّٖ ضِعۡفٞ وَلَٰكِن لَّا تَعۡلَمُونَ (38) وَقَالَتۡ أُولَىٰهُمۡ لِأُخۡرَىٰهُمۡ فَمَا كَانَ لَكُمۡ عَلَيۡنَا مِن فَضۡلٖ فَذُوقُواْ ٱلۡعَذَابَ بِمَا كُنتُمۡ تَكۡسِبُونَ (39) إِنَّ ٱلَّذِينَ كَذَّبُواْ بِـَٔايَٰتِنَا وَٱسۡتَكۡبَرُواْ عَنۡهَا لَا تُفَتَّحُ لَهُمۡ أَبۡوَٰبُ ٱلسَّمَآءِ وَلَا يَدۡخُلُونَ ٱلۡجَنَّةَ حَتَّىٰ يَلِجَ ٱلۡجَمَلُ فِي سَمِّ ٱلۡخِيَاطِۚ وَكَذَٰلِكَ نَجۡزِي ٱلۡمُجۡرِمِينَ (40) لَهُم مِّن جَهَنَّمَ مِهَادٞ وَمِن فَوۡقِهِمۡ غَوَاشٖۚ وَكَذَٰلِكَ نَجۡزِي ٱلظَّٰلِمِينَ (41) وَٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ لَا نُكَلِّفُ نَفۡسًا إِلَّا وُسۡعَهَآ أُوْلَٰٓئِكَ أَصۡحَٰبُ ٱلۡجَنَّةِۖ هُمۡ فِيهَا خَٰلِدُونَ (42) وَنَزَعۡنَا مَا فِي صُدُورِهِم مِّنۡ غِلّٖ تَجۡرِي مِن تَحۡتِهِمُ ٱلۡأَنۡهَٰرُۖ وَقَالُواْ ٱلۡحَمۡدُ لِلَّهِ ٱلَّذِي هَدَىٰنَا لِهَٰذَا وَمَا كُنَّا لِنَهۡتَدِيَ لَوۡلَآ أَنۡ هَدَىٰنَا ٱللَّهُۖ لَقَدۡ جَآءَتۡ رُسُلُ رَبِّنَا بِٱلۡحَقِّۖ وَنُودُوٓاْ أَن تِلۡكُمُ ٱلۡجَنَّةُ أُورِثۡتُمُوهَا بِمَا كُنتُمۡ تَعۡمَلُونَ (43) وَنَادَىٰٓ أَصۡحَٰبُ ٱلۡجَنَّةِ أَصۡحَٰبَ ٱلنَّارِ أَن قَدۡ وَجَدۡنَا مَا وَعَدَنَا رَبُّنَا حَقّٗا فَهَلۡ وَجَدتُّم مَّا وَعَدَ رَبُّكُمۡ حَقّٗاۖ قَالُواْ نَعَمۡۚ فَأَذَّنَ مُؤَذِّنُۢ بَيۡنَهُمۡ أَن لَّعۡنَةُ ٱللَّهِ عَلَى ٱلظَّٰلِمِينَ (44) ٱلَّذِينَ يَصُدُّونَ عَن سَبِيلِ ٱللَّهِ وَيَبۡغُونَهَا عِوَجٗا وَهُم بِٱلۡأٓخِرَةِ كَٰفِرُونَ (45) وَبَيۡنَهُمَا حِجَابٞۚ وَعَلَى ٱلۡأَعۡرَافِ رِجَالٞ يَعۡرِفُونَ كُلَّۢا بِسِيمَىٰهُمۡۚ وَنَادَوۡاْ أَصۡحَٰبَ ٱلۡجَنَّةِ أَن سَلَٰمٌ عَلَيۡكُمۡۚ لَمۡ يَدۡخُلُوهَا وَهُمۡ يَطۡمَعُونَ (46) ۞وَإِذَا صُرِفَتۡ أَبۡصَٰرُهُمۡ تِلۡقَآءَ أَصۡحَٰبِ ٱلنَّارِ قَالُواْ رَبَّنَا لَا تَجۡعَلۡنَا مَعَ ٱلۡقَوۡمِ ٱلظَّٰلِمِينَ (47) وَنَادَىٰٓ أَصۡحَٰبُ ٱلۡأَعۡرَافِ رِجَالٗا يَعۡرِفُونَهُم بِسِيمَىٰهُمۡ قَالُواْ مَآ أَغۡنَىٰ عَنكُمۡ جَمۡعُكُمۡ وَمَا كُنتُمۡ تَسۡتَكۡبِرُونَ (48) أَهَٰٓؤُلَآءِ ٱلَّذِينَ أَقۡسَمۡتُمۡ لَا يَنَالُهُمُ ٱللَّهُ بِرَحۡمَةٍۚ ٱدۡخُلُواْ ٱلۡجَنَّةَ لَا خَوۡفٌ عَلَيۡكُمۡ وَلَآ أَنتُمۡ تَحۡزَنُونَ (49) وَنَادَىٰٓ أَصۡحَٰبُ ٱلنَّارِ أَصۡحَٰبَ ٱلۡجَنَّةِ أَنۡ أَفِيضُواْ عَلَيۡنَا مِنَ ٱلۡمَآءِ أَوۡ مِمَّا رَزَقَكُمُ ٱللَّهُۚ قَالُوٓاْ إِنَّ ٱللَّهَ حَرَّمَهُمَا عَلَى ٱلۡكَٰفِرِينَ (50) ٱلَّذِينَ ٱتَّخَذُواْ دِينَهُمۡ لَهۡوٗا وَلَعِبٗا وَغَرَّتۡهُمُ ٱلۡحَيَوٰةُ ٱلدُّنۡيَاۚ فَٱلۡيَوۡمَ نَنسَىٰهُمۡ كَمَا نَسُواْ لِقَآءَ يَوۡمِهِمۡ هَٰذَا وَمَا كَانُواْ بِـَٔايَٰتِنَا يَجۡحَدُونَ (51) وَلَقَدۡ جِئۡنَٰهُم بِكِتَٰبٖ فَصَّلۡنَٰهُ عَلَىٰ عِلۡمٍ هُدٗى وَرَحۡمَةٗ لِّقَوۡمٖ يُؤۡمِنُونَ (52) هَلۡ يَنظُرُونَ إِلَّا تَأۡوِيلَهُۥۚ يَوۡمَ يَأۡتِي تَأۡوِيلُهُۥ يَقُولُ ٱلَّذِينَ نَسُوهُ مِن قَبۡلُ قَدۡ جَآءَتۡ رُسُلُ رَبِّنَا بِٱلۡحَقِّ فَهَل لَّنَا مِن شُفَعَآءَ فَيَشۡفَعُواْ لَنَآ أَوۡ نُرَدُّ فَنَعۡمَلَ غَيۡرَ ٱلَّذِي كُنَّا نَعۡمَلُۚ قَدۡ خَسِرُوٓاْ أَنفُسَهُمۡ وَضَلَّ عَنۡهُم مَّا كَانُواْ يَفۡتَرُونَ (53) إِنَّ رَبَّكُمُ ٱللَّهُ ٱلَّذِي خَلَقَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ فِي سِتَّةِ أَيَّامٖ ثُمَّ ٱسۡتَوَىٰ عَلَى ٱلۡعَرۡشِۖ يُغۡشِي ٱلَّيۡلَ ٱلنَّهَارَ يَطۡلُبُهُۥ حَثِيثٗا وَٱلشَّمۡسَ وَٱلۡقَمَرَ وَٱلنُّجُومَ مُسَخَّرَٰتِۭ بِأَمۡرِهِۦٓۗ أَلَا لَهُ ٱلۡخَلۡقُ وَٱلۡأَمۡرُۗ تَبَارَكَ ٱللَّهُ رَبُّ ٱلۡعَٰلَمِينَ (54) ٱدۡعُواْ رَبَّكُمۡ تَضَرُّعٗا وَخُفۡيَةًۚ إِنَّهُۥ لَا يُحِبُّ ٱلۡمُعۡتَدِينَ (55) وَلَا تُفۡسِدُواْ فِي ٱلۡأَرۡضِ بَعۡدَ إِصۡلَٰحِهَا وَٱدۡعُوهُ خَوۡفٗا وَطَمَعًاۚ إِنَّ رَحۡمَتَ ٱللَّهِ قَرِيبٞ مِّنَ ٱلۡمُحۡسِنِينَ (56) وَهُوَ ٱلَّذِي يُرۡسِلُ ٱلرِّيَٰحَ بُشۡرَۢا بَيۡنَ يَدَيۡ رَحۡمَتِهِۦۖ حَتَّىٰٓ إِذَآ أَقَلَّتۡ سَحَابٗا ثِقَالٗا سُقۡنَٰهُ لِبَلَدٖ مَّيِّتٖ فَأَنزَلۡنَا بِهِ ٱلۡمَآءَ فَأَخۡرَجۡنَا بِهِۦ مِن كُلِّ ٱلثَّمَرَٰتِۚ كَذَٰلِكَ نُخۡرِجُ ٱلۡمَوۡتَىٰ لَعَلَّكُمۡ تَذَكَّرُونَ (57) وَٱلۡبَلَدُ ٱلطَّيِّبُ يَخۡرُجُ نَبَاتُهُۥ بِإِذۡنِ رَبِّهِۦۖ وَٱلَّذِي خَبُثَ لَا يَخۡرُجُ إِلَّا نَكِدٗاۚ كَذَٰلِكَ نُصَرِّفُ ٱلۡأٓيَٰتِ لِقَوۡمٖ يَشۡكُرُونَ (58) لَقَدۡ أَرۡسَلۡنَا نُوحًا إِلَىٰ قَوۡمِهِۦ فَقَالَ يَٰقَوۡمِ ٱعۡبُدُواْ ٱللَّهَ مَا لَكُم مِّنۡ إِلَٰهٍ غَيۡرُهُۥٓ إِنِّيٓ أَخَافُ عَلَيۡكُمۡ عَذَابَ يَوۡمٍ عَظِيمٖ (59) قَالَ ٱلۡمَلَأُ مِن قَوۡمِهِۦٓ إِنَّا لَنَرَىٰكَ فِي ضَلَٰلٖ مُّبِينٖ (60) قَالَ يَٰقَوۡمِ لَيۡسَ بِي ضَلَٰلَةٞ وَلَٰكِنِّي رَسُولٞ مِّن رَّبِّ ٱلۡعَٰلَمِينَ (61) أُبَلِّغُكُمۡ رِسَٰلَٰتِ رَبِّي وَأَنصَحُ لَكُمۡ وَأَعۡلَمُ مِنَ ٱللَّهِ مَا لَا تَعۡلَمُونَ (62) أَوَعَجِبۡتُمۡ أَن جَآءَكُمۡ ذِكۡرٞ مِّن رَّبِّكُمۡ عَلَىٰ رَجُلٖ مِّنكُمۡ لِيُنذِرَكُمۡ وَلِتَتَّقُواْ وَلَعَلَّكُمۡ تُرۡحَمُونَ (63) فَكَذَّبُوهُ فَأَنجَيۡنَٰهُ وَٱلَّذِينَ مَعَهُۥ فِي ٱلۡفُلۡكِ وَأَغۡرَقۡنَا ٱلَّذِينَ كَذَّبُواْ بِـَٔايَٰتِنَآۚ إِنَّهُمۡ كَانُواْ قَوۡمًا عَمِينَ (64) ۞وَإِلَىٰ عَادٍ أَخَاهُمۡ هُودٗاۚ قَالَ يَٰقَوۡمِ ٱعۡبُدُواْ ٱللَّهَ مَا لَكُم مِّنۡ إِلَٰهٍ غَيۡرُهُۥٓۚ أَفَلَا تَتَّقُونَ (65) قَالَ ٱلۡمَلَأُ ٱلَّذِينَ كَفَرُواْ مِن قَوۡمِهِۦٓ إِنَّا لَنَرَىٰكَ فِي سَفَاهَةٖ وَإِنَّا لَنَظُنُّكَ مِنَ ٱلۡكَٰذِبِينَ (66) قَالَ يَٰقَوۡمِ لَيۡسَ بِي سَفَاهَةٞ وَلَٰكِنِّي رَسُولٞ مِّن رَّبِّ ٱلۡعَٰلَمِينَ (67) أُبَلِّغُكُمۡ رِسَٰلَٰتِ رَبِّي وَأَنَا۠ لَكُمۡ نَاصِحٌ أَمِينٌ (68) أَوَعَجِبۡتُمۡ أَن جَآءَكُمۡ ذِكۡرٞ مِّن رَّبِّكُمۡ عَلَىٰ رَجُلٖ مِّنكُمۡ لِيُنذِرَكُمۡۚ وَٱذۡكُرُوٓاْ إِذۡ جَعَلَكُمۡ خُلَفَآءَ مِنۢ بَعۡدِ قَوۡمِ نُوحٖ وَزَادَكُمۡ فِي ٱلۡخَلۡقِ بَصۜۡطَةٗۖ فَٱذۡكُرُوٓاْ ءَالَآءَ ٱللَّهِ لَعَلَّكُمۡ تُفۡلِحُونَ (69) قَالُوٓاْ أَجِئۡتَنَا لِنَعۡبُدَ ٱللَّهَ وَحۡدَهُۥ وَنَذَرَ مَا كَانَ يَعۡبُدُ ءَابَآؤُنَا فَأۡتِنَا بِمَا تَعِدُنَآ إِن كُنتَ مِنَ ٱلصَّٰدِقِينَ (70) قَالَ قَدۡ وَقَعَ عَلَيۡكُم مِّن رَّبِّكُمۡ رِجۡسٞ وَغَضَبٌۖ أَتُجَٰدِلُونَنِي فِيٓ أَسۡمَآءٖ سَمَّيۡتُمُوهَآ أَنتُمۡ وَءَابَآؤُكُم مَّا نَزَّلَ ٱللَّهُ بِهَا مِن سُلۡطَٰنٖۚ فَٱنتَظِرُوٓاْ إِنِّي مَعَكُم مِّنَ ٱلۡمُنتَظِرِينَ (71) فَأَنجَيۡنَٰهُ وَٱلَّذِينَ مَعَهُۥ بِرَحۡمَةٖ مِّنَّا وَقَطَعۡنَا دَابِرَ ٱلَّذِينَ كَذَّبُواْ بِـَٔايَٰتِنَاۖ وَمَا كَانُواْ مُؤۡمِنِينَ (72) وَإِلَىٰ ثَمُودَ أَخَاهُمۡ صَٰلِحٗاۚ قَالَ يَٰقَوۡمِ ٱعۡبُدُواْ ٱللَّهَ مَا لَكُم مِّنۡ إِلَٰهٍ غَيۡرُهُۥۖ قَدۡ جَآءَتۡكُم بَيِّنَةٞ مِّن رَّبِّكُمۡۖ هَٰذِهِۦ نَاقَةُ ٱللَّهِ لَكُمۡ ءَايَةٗۖ فَذَرُوهَا تَأۡكُلۡ فِيٓ أَرۡضِ ٱللَّهِۖ وَلَا تَمَسُّوهَا بِسُوٓءٖ فَيَأۡخُذَكُمۡ عَذَابٌ أَلِيمٞ (73) وَٱذۡكُرُوٓاْ إِذۡ جَعَلَكُمۡ خُلَفَآءَ مِنۢ بَعۡدِ عَادٖ وَبَوَّأَكُمۡ فِي ٱلۡأَرۡضِ تَتَّخِذُونَ مِن سُهُولِهَا قُصُورٗا وَتَنۡحِتُونَ ٱلۡجِبَالَ بُيُوتٗاۖ فَٱذۡكُرُوٓاْ ءَالَآءَ ٱللَّهِ وَلَا تَعۡثَوۡاْ فِي ٱلۡأَرۡضِ مُفۡسِدِينَ (74) قَالَ ٱلۡمَلَأُ ٱلَّذِينَ ٱسۡتَكۡبَرُواْ مِن قَوۡمِهِۦ لِلَّذِينَ ٱسۡتُضۡعِفُواْ لِمَنۡ ءَامَنَ مِنۡهُمۡ أَتَعۡلَمُونَ أَنَّ صَٰلِحٗا مُّرۡسَلٞ مِّن رَّبِّهِۦۚ قَالُوٓاْ إِنَّا بِمَآ أُرۡسِلَ بِهِۦ مُؤۡمِنُونَ (75) قَالَ ٱلَّذِينَ ٱسۡتَكۡبَرُوٓاْ إِنَّا بِٱلَّذِيٓ ءَامَنتُم بِهِۦ كَٰفِرُونَ (76) فَعَقَرُواْ ٱلنَّاقَةَ وَعَتَوۡاْ عَنۡ أَمۡرِ رَبِّهِمۡ وَقَالُواْ يَٰصَٰلِحُ ٱئۡتِنَا بِمَا تَعِدُنَآ إِن كُنتَ مِنَ ٱلۡمُرۡسَلِينَ (77) فَأَخَذَتۡهُمُ ٱلرَّجۡفَةُ فَأَصۡبَحُواْ فِي دَارِهِمۡ جَٰثِمِينَ (78) فَتَوَلَّىٰ عَنۡهُمۡ وَقَالَ يَٰقَوۡمِ لَقَدۡ أَبۡلَغۡتُكُمۡ رِسَالَةَ رَبِّي وَنَصَحۡتُ لَكُمۡ وَلَٰكِن لَّا تُحِبُّونَ ٱلنَّٰصِحِينَ (79) وَلُوطًا إِذۡ قَالَ لِقَوۡمِهِۦٓ أَتَأۡتُونَ ٱلۡفَٰحِشَةَ مَا سَبَقَكُم بِهَا مِنۡ أَحَدٖ مِّنَ ٱلۡعَٰلَمِينَ (80) إِنَّكُمۡ لَتَأۡتُونَ ٱلرِّجَالَ شَهۡوَةٗ مِّن دُونِ ٱلنِّسَآءِۚ بَلۡ أَنتُمۡ قَوۡمٞ مُّسۡرِفُونَ (81) وَمَا كَانَ جَوَابَ قَوۡمِهِۦٓ إِلَّآ أَن قَالُوٓاْ أَخۡرِجُوهُم مِّن قَرۡيَتِكُمۡۖ إِنَّهُمۡ أُنَاسٞ يَتَطَهَّرُونَ (82) فَأَنجَيۡنَٰهُ وَأَهۡلَهُۥٓ إِلَّا ٱمۡرَأَتَهُۥ كَانَتۡ مِنَ ٱلۡغَٰبِرِينَ (83) وَأَمۡطَرۡنَا عَلَيۡهِم مَّطَرٗاۖ فَٱنظُرۡ كَيۡفَ كَانَ عَٰقِبَةُ ٱلۡمُجۡرِمِينَ (84) وَإِلَىٰ مَدۡيَنَ أَخَاهُمۡ شُعَيۡبٗاۚ قَالَ يَٰقَوۡمِ ٱعۡبُدُواْ ٱللَّهَ مَا لَكُم مِّنۡ إِلَٰهٍ غَيۡرُهُۥۖ قَدۡ جَآءَتۡكُم بَيِّنَةٞ مِّن رَّبِّكُمۡۖ فَأَوۡفُواْ ٱلۡكَيۡلَ وَٱلۡمِيزَانَ وَلَا تَبۡخَسُواْ ٱلنَّاسَ أَشۡيَآءَهُمۡ وَلَا تُفۡسِدُواْ فِي ٱلۡأَرۡضِ بَعۡدَ إِصۡلَٰحِهَاۚ ذَٰلِكُمۡ خَيۡرٞ لَّكُمۡ إِن كُنتُم مُّؤۡمِنِينَ (85) وَلَا تَقۡعُدُواْ بِكُلِّ صِرَٰطٖ تُوعِدُونَ وَتَصُدُّونَ عَن سَبِيلِ ٱللَّهِ مَنۡ ءَامَنَ بِهِۦ وَتَبۡغُونَهَا عِوَجٗاۚ وَٱذۡكُرُوٓاْ إِذۡ كُنتُمۡ قَلِيلٗا فَكَثَّرَكُمۡۖ وَٱنظُرُواْ كَيۡفَ كَانَ عَٰقِبَةُ ٱلۡمُفۡسِدِينَ (86) وَإِن كَانَ طَآئِفَةٞ مِّنكُمۡ ءَامَنُواْ بِٱلَّذِيٓ أُرۡسِلۡتُ بِهِۦ وَطَآئِفَةٞ لَّمۡ يُؤۡمِنُواْ فَٱصۡبِرُواْ حَتَّىٰ يَحۡكُمَ ٱللَّهُ بَيۡنَنَاۚ وَهُوَ خَيۡرُ ٱلۡحَٰكِمِينَ (87) ۞قَالَ ٱلۡمَلَأُ ٱلَّذِينَ ٱسۡتَكۡبَرُواْ مِن قَوۡمِهِۦ لَنُخۡرِجَنَّكَ يَٰشُعَيۡبُ وَٱلَّذِينَ ءَامَنُواْ مَعَكَ مِن قَرۡيَتِنَآ أَوۡ لَتَعُودُنَّ فِي مِلَّتِنَاۚ قَالَ أَوَلَوۡ كُنَّا كَٰرِهِينَ (88) قَدِ ٱفۡتَرَيۡنَا عَلَى ٱللَّهِ كَذِبًا إِنۡ عُدۡنَا فِي مِلَّتِكُم بَعۡدَ إِذۡ نَجَّىٰنَا ٱللَّهُ مِنۡهَاۚ وَمَا يَكُونُ لَنَآ أَن نَّعُودَ فِيهَآ إِلَّآ أَن يَشَآءَ ٱللَّهُ رَبُّنَاۚ وَسِعَ رَبُّنَا كُلَّ شَيۡءٍ عِلۡمًاۚ عَلَى ٱللَّهِ تَوَكَّلۡنَاۚ رَبَّنَا ٱفۡتَحۡ بَيۡنَنَا وَبَيۡنَ قَوۡمِنَا بِٱلۡحَقِّ وَأَنتَ خَيۡرُ ٱلۡفَٰتِحِينَ (89) وَقَالَ ٱلۡمَلَأُ ٱلَّذِينَ كَفَرُواْ مِن قَوۡمِهِۦ لَئِنِ ٱتَّبَعۡتُمۡ شُعَيۡبًا إِنَّكُمۡ إِذٗا لَّخَٰسِرُونَ (90) فَأَخَذَتۡهُمُ ٱلرَّجۡفَةُ فَأَصۡبَحُواْ فِي دَارِهِمۡ جَٰثِمِينَ (91) ٱلَّذِينَ كَذَّبُواْ شُعَيۡبٗا كَأَن لَّمۡ يَغۡنَوۡاْ فِيهَاۚ ٱلَّذِينَ كَذَّبُواْ شُعَيۡبٗا كَانُواْ هُمُ ٱلۡخَٰسِرِينَ (92) فَتَوَلَّىٰ عَنۡهُمۡ وَقَالَ يَٰقَوۡمِ لَقَدۡ أَبۡلَغۡتُكُمۡ رِسَٰلَٰتِ رَبِّي وَنَصَحۡتُ لَكُمۡۖ فَكَيۡفَ ءَاسَىٰ عَلَىٰ قَوۡمٖ كَٰفِرِينَ (93) وَمَآ أَرۡسَلۡنَا فِي قَرۡيَةٖ مِّن نَّبِيٍّ إِلَّآ أَخَذۡنَآ أَهۡلَهَا بِٱلۡبَأۡسَآءِ وَٱلضَّرَّآءِ لَعَلَّهُمۡ يَضَّرَّعُونَ (94) ثُمَّ بَدَّلۡنَا مَكَانَ ٱلسَّيِّئَةِ ٱلۡحَسَنَةَ حَتَّىٰ عَفَواْ وَّقَالُواْ قَدۡ مَسَّ ءَابَآءَنَا ٱلضَّرَّآءُ وَٱلسَّرَّآءُ فَأَخَذۡنَٰهُم بَغۡتَةٗ وَهُمۡ لَا يَشۡعُرُونَ (95) وَلَوۡ أَنَّ أَهۡلَ ٱلۡقُرَىٰٓ ءَامَنُواْ وَٱتَّقَوۡاْ لَفَتَحۡنَا عَلَيۡهِم بَرَكَٰتٖ مِّنَ ٱلسَّمَآءِ وَٱلۡأَرۡضِ وَلَٰكِن كَذَّبُواْ فَأَخَذۡنَٰهُم بِمَا كَانُواْ يَكۡسِبُونَ (96) أَفَأَمِنَ أَهۡلُ ٱلۡقُرَىٰٓ أَن يَأۡتِيَهُم بَأۡسُنَا بَيَٰتٗا وَهُمۡ نَآئِمُونَ (97) أَوَ أَمِنَ أَهۡلُ ٱلۡقُرَىٰٓ أَن يَأۡتِيَهُم بَأۡسُنَا ضُحٗى وَهُمۡ يَلۡعَبُونَ (98) أَفَأَمِنُواْ مَكۡرَ ٱللَّهِۚ فَلَا يَأۡمَنُ مَكۡرَ ٱللَّهِ إِلَّا ٱلۡقَوۡمُ ٱلۡخَٰسِرُونَ (99) أَوَ لَمۡ يَهۡدِ لِلَّذِينَ يَرِثُونَ ٱلۡأَرۡضَ مِنۢ بَعۡدِ أَهۡلِهَآ أَن لَّوۡ نَشَآءُ أَصَبۡنَٰهُم بِذُنُوبِهِمۡۚ وَنَطۡبَعُ عَلَىٰ قُلُوبِهِمۡ فَهُمۡ لَا يَسۡمَعُونَ (100) تِلۡكَ ٱلۡقُرَىٰ نَقُصُّ عَلَيۡكَ مِنۡ أَنۢبَآئِهَاۚ وَلَقَدۡ جَآءَتۡهُمۡ رُسُلُهُم بِٱلۡبَيِّنَٰتِ فَمَا كَانُواْ لِيُؤۡمِنُواْ بِمَا كَذَّبُواْ مِن قَبۡلُۚ كَذَٰلِكَ يَطۡبَعُ ٱللَّهُ عَلَىٰ قُلُوبِ ٱلۡكَٰفِرِينَ (101) وَمَا وَجَدۡنَا لِأَكۡثَرِهِم مِّنۡ عَهۡدٖۖ وَإِن وَجَدۡنَآ أَكۡثَرَهُمۡ لَفَٰسِقِينَ (102) ثُمَّ بَعَثۡنَا مِنۢ بَعۡدِهِم مُّوسَىٰ بِـَٔايَٰتِنَآ إِلَىٰ فِرۡعَوۡنَ وَمَلَإِيْهِۦ فَظَلَمُواْ بِهَاۖ فَٱنظُرۡ كَيۡفَ كَانَ عَٰقِبَةُ ٱلۡمُفۡسِدِينَ (103) وَقَالَ مُوسَىٰ يَٰفِرۡعَوۡنُ إِنِّي رَسُولٞ مِّن رَّبِّ ٱلۡعَٰلَمِينَ (104) حَقِيقٌ عَلَىٰٓ أَن لَّآ أَقُولَ عَلَى ٱللَّهِ إِلَّا ٱلۡحَقَّۚ قَدۡ جِئۡتُكُم بِبَيِّنَةٖ مِّن رَّبِّكُمۡ فَأَرۡسِلۡ مَعِيَ بَنِيٓ إِسۡرَٰٓءِيلَ (105) قَالَ إِن كُنتَ جِئۡتَ بِـَٔايَةٖ فَأۡتِ بِهَآ إِن كُنتَ مِنَ ٱلصَّٰدِقِينَ (106) فَأَلۡقَىٰ عَصَاهُ فَإِذَا هِيَ ثُعۡبَانٞ مُّبِينٞ (107) وَنَزَعَ يَدَهُۥ فَإِذَا هِيَ بَيۡضَآءُ لِلنَّٰظِرِينَ (108) قَالَ ٱلۡمَلَأُ مِن قَوۡمِ فِرۡعَوۡنَ إِنَّ هَٰذَا لَسَٰحِرٌ عَلِيمٞ (109) يُرِيدُ أَن يُخۡرِجَكُم مِّنۡ أَرۡضِكُمۡۖ فَمَاذَا تَأۡمُرُونَ (110) قَالُوٓاْ أَرۡجِهۡ وَأَخَاهُ وَأَرۡسِلۡ فِي ٱلۡمَدَآئِنِ حَٰشِرِينَ (111) يَأۡتُوكَ بِكُلِّ سَٰحِرٍ عَلِيمٖ (112) وَجَآءَ ٱلسَّحَرَةُ فِرۡعَوۡنَ قَالُوٓاْ إِنَّ لَنَا لَأَجۡرًا إِن كُنَّا نَحۡنُ ٱلۡغَٰلِبِينَ (113) قَالَ نَعَمۡ وَإِنَّكُمۡ لَمِنَ ٱلۡمُقَرَّبِينَ (114) قَالُواْ يَٰمُوسَىٰٓ إِمَّآ أَن تُلۡقِيَ وَإِمَّآ أَن نَّكُونَ نَحۡنُ ٱلۡمُلۡقِينَ (115) قَالَ أَلۡقُواْۖ فَلَمَّآ أَلۡقَوۡاْ سَحَرُوٓاْ أَعۡيُنَ ٱلنَّاسِ وَٱسۡتَرۡهَبُوهُمۡ وَجَآءُو بِسِحۡرٍ عَظِيمٖ (116) ۞وَأَوۡحَيۡنَآ إِلَىٰ مُوسَىٰٓ أَنۡ أَلۡقِ عَصَاكَۖ فَإِذَا هِيَ تَلۡقَفُ مَا يَأۡفِكُونَ (117) فَوَقَعَ ٱلۡحَقُّ وَبَطَلَ مَا كَانُواْ يَعۡمَلُونَ (118) فَغُلِبُواْ هُنَالِكَ وَٱنقَلَبُواْ صَٰغِرِينَ (119) وَأُلۡقِيَ ٱلسَّحَرَةُ سَٰجِدِينَ (120) قَالُوٓاْ ءَامَنَّا بِرَبِّ ٱلۡعَٰلَمِينَ (121) رَبِّ مُوسَىٰ وَهَٰرُونَ (122) قَالَ فِرۡعَوۡنُ ءَامَنتُم بِهِۦ قَبۡلَ أَنۡ ءَاذَنَ لَكُمۡۖ إِنَّ هَٰذَا لَمَكۡرٞ مَّكَرۡتُمُوهُ فِي ٱلۡمَدِينَةِ لِتُخۡرِجُواْ مِنۡهَآ أَهۡلَهَاۖ فَسَوۡفَ تَعۡلَمُونَ (123) لَأُقَطِّعَنَّ أَيۡدِيَكُمۡ وَأَرۡجُلَكُم مِّنۡ خِلَٰفٖ ثُمَّ لَأُصَلِّبَنَّكُمۡ أَجۡمَعِينَ (124) قَالُوٓاْ إِنَّآ إِلَىٰ رَبِّنَا مُنقَلِبُونَ (125) وَمَا تَنقِمُ مِنَّآ إِلَّآ أَنۡ ءَامَنَّا بِـَٔايَٰتِ رَبِّنَا لَمَّا جَآءَتۡنَاۚ رَبَّنَآ أَفۡرِغۡ عَلَيۡنَا صَبۡرٗا وَتَوَفَّنَا مُسۡلِمِينَ (126) وَقَالَ ٱلۡمَلَأُ مِن قَوۡمِ فِرۡعَوۡنَ أَتَذَرُ مُوسَىٰ وَقَوۡمَهُۥ لِيُفۡسِدُواْ فِي ٱلۡأَرۡضِ وَيَذَرَكَ وَءَالِهَتَكَۚ قَالَ سَنُقَتِّلُ أَبۡنَآءَهُمۡ وَنَسۡتَحۡيِۦ نِسَآءَهُمۡ وَإِنَّا فَوۡقَهُمۡ قَٰهِرُونَ (127) قَالَ مُوسَىٰ لِقَوۡمِهِ ٱسۡتَعِينُواْ بِٱللَّهِ وَٱصۡبِرُوٓاْۖ إِنَّ ٱلۡأَرۡضَ لِلَّهِ يُورِثُهَا مَن يَشَآءُ مِنۡ عِبَادِهِۦۖ وَٱلۡعَٰقِبَةُ لِلۡمُتَّقِينَ (128) قَالُوٓاْ أُوذِينَا مِن قَبۡلِ أَن تَأۡتِيَنَا وَمِنۢ بَعۡدِ مَا جِئۡتَنَاۚ قَالَ عَسَىٰ رَبُّكُمۡ أَن يُهۡلِكَ عَدُوَّكُمۡ وَيَسۡتَخۡلِفَكُمۡ فِي ٱلۡأَرۡضِ فَيَنظُرَ كَيۡفَ تَعۡمَلُونَ (129) وَلَقَدۡ أَخَذۡنَآ ءَالَ فِرۡعَوۡنَ بِٱلسِّنِينَ وَنَقۡصٖ مِّنَ ٱلثَّمَرَٰتِ لَعَلَّهُمۡ يَذَّكَّرُونَ (130) فَإِذَا جَآءَتۡهُمُ ٱلۡحَسَنَةُ قَالُواْ لَنَا هَٰذِهِۦۖ وَإِن تُصِبۡهُمۡ سَيِّئَةٞ يَطَّيَّرُواْ بِمُوسَىٰ وَمَن مَّعَهُۥٓۗ أَلَآ إِنَّمَا طَٰٓئِرُهُمۡ عِندَ ٱللَّهِ وَلَٰكِنَّ أَكۡثَرَهُمۡ لَا يَعۡلَمُونَ (131) وَقَالُواْ مَهۡمَا تَأۡتِنَا بِهِۦ مِنۡ ءَايَةٖ لِّتَسۡحَرَنَا بِهَا فَمَا نَحۡنُ لَكَ بِمُؤۡمِنِينَ (132) فَأَرۡسَلۡنَا عَلَيۡهِمُ ٱلطُّوفَانَ وَٱلۡجَرَادَ وَٱلۡقُمَّلَ وَٱلضَّفَادِعَ وَٱلدَّمَ ءَايَٰتٖ مُّفَصَّلَٰتٖ فَٱسۡتَكۡبَرُواْ وَكَانُواْ قَوۡمٗا مُّجۡرِمِينَ (133) وَلَمَّا وَقَعَ عَلَيۡهِمُ ٱلرِّجۡزُ قَالُواْ يَٰمُوسَى ٱدۡعُ لَنَا رَبَّكَ بِمَا عَهِدَ عِندَكَۖ لَئِن كَشَفۡتَ عَنَّا ٱلرِّجۡزَ لَنُؤۡمِنَنَّ لَكَ وَلَنُرۡسِلَنَّ مَعَكَ بَنِيٓ إِسۡرَٰٓءِيلَ (134) فَلَمَّا كَشَفۡنَا عَنۡهُمُ ٱلرِّجۡزَ إِلَىٰٓ أَجَلٍ هُم بَٰلِغُوهُ إِذَا هُمۡ يَنكُثُونَ (135) فَٱنتَقَمۡنَا مِنۡهُمۡ فَأَغۡرَقۡنَٰهُمۡ فِي ٱلۡيَمِّ بِأَنَّهُمۡ كَذَّبُواْ بِـَٔايَٰتِنَا وَكَانُواْ عَنۡهَا غَٰفِلِينَ (136) وَأَوۡرَثۡنَا ٱلۡقَوۡمَ ٱلَّذِينَ كَانُواْ يُسۡتَضۡعَفُونَ مَشَٰرِقَ ٱلۡأَرۡضِ وَمَغَٰرِبَهَا ٱلَّتِي بَٰرَكۡنَا فِيهَاۖ وَتَمَّتۡ كَلِمَتُ رَبِّكَ ٱلۡحُسۡنَىٰ عَلَىٰ بَنِيٓ إِسۡرَٰٓءِيلَ بِمَا صَبَرُواْۖ وَدَمَّرۡنَا مَا كَانَ يَصۡنَعُ فِرۡعَوۡنُ وَقَوۡمُهُۥ وَمَا كَانُواْ يَعۡرِشُونَ (137) وَجَٰوَزۡنَا بِبَنِيٓ إِسۡرَٰٓءِيلَ ٱلۡبَحۡرَ فَأَتَوۡاْ عَلَىٰ قَوۡمٖ يَعۡكُفُونَ عَلَىٰٓ أَصۡنَامٖ لَّهُمۡۚ قَالُواْ يَٰمُوسَى ٱجۡعَل لَّنَآ إِلَٰهٗا كَمَا لَهُمۡ ءَالِهَةٞۚ قَالَ إِنَّكُمۡ قَوۡمٞ تَجۡهَلُونَ (138) إِنَّ هَٰٓؤُلَآءِ مُتَبَّرٞ مَّا هُمۡ فِيهِ وَبَٰطِلٞ مَّا كَانُواْ يَعۡمَلُونَ (139) قَالَ أَغَيۡرَ ٱللَّهِ أَبۡغِيكُمۡ إِلَٰهٗا وَهُوَ فَضَّلَكُمۡ عَلَى ٱلۡعَٰلَمِينَ (140) وَإِذۡ أَنجَيۡنَٰكُم مِّنۡ ءَالِ فِرۡعَوۡنَ يَسُومُونَكُمۡ سُوٓءَ ٱلۡعَذَابِ يُقَتِّلُونَ أَبۡنَآءَكُمۡ وَيَسۡتَحۡيُونَ نِسَآءَكُمۡۚ وَفِي ذَٰلِكُم بَلَآءٞ مِّن رَّبِّكُمۡ عَظِيمٞ (141) ۞وَوَٰعَدۡنَا مُوسَىٰ ثَلَٰثِينَ لَيۡلَةٗ وَأَتۡمَمۡنَٰهَا بِعَشۡرٖ فَتَمَّ مِيقَٰتُ رَبِّهِۦٓ أَرۡبَعِينَ لَيۡلَةٗۚ وَقَالَ مُوسَىٰ لِأَخِيهِ هَٰرُونَ ٱخۡلُفۡنِي فِي قَوۡمِي وَأَصۡلِحۡ وَلَا تَتَّبِعۡ سَبِيلَ ٱلۡمُفۡسِدِينَ (142) وَلَمَّا جَآءَ مُوسَىٰ لِمِيقَٰتِنَا وَكَلَّمَهُۥ رَبُّهُۥ قَالَ رَبِّ أَرِنِيٓ أَنظُرۡ إِلَيۡكَۚ قَالَ لَن تَرَىٰنِي وَلَٰكِنِ ٱنظُرۡ إِلَى ٱلۡجَبَلِ فَإِنِ ٱسۡتَقَرَّ مَكَانَهُۥ فَسَوۡفَ تَرَىٰنِيۚ فَلَمَّا تَجَلَّىٰ رَبُّهُۥ لِلۡجَبَلِ جَعَلَهُۥ دَكّٗا وَخَرَّ مُوسَىٰ صَعِقٗاۚ فَلَمَّآ أَفَاقَ قَالَ سُبۡحَٰنَكَ تُبۡتُ إِلَيۡكَ وَأَنَا۠ أَوَّلُ ٱلۡمُؤۡمِنِينَ (143) قَالَ يَٰمُوسَىٰٓ إِنِّي ٱصۡطَفَيۡتُكَ عَلَى ٱلنَّاسِ بِرِسَٰلَٰتِي وَبِكَلَٰمِي فَخُذۡ مَآ ءَاتَيۡتُكَ وَكُن مِّنَ ٱلشَّٰكِرِينَ (144) وَكَتَبۡنَا لَهُۥ فِي ٱلۡأَلۡوَاحِ مِن كُلِّ شَيۡءٖ مَّوۡعِظَةٗ وَتَفۡصِيلٗا لِّكُلِّ شَيۡءٖ فَخُذۡهَا بِقُوَّةٖ وَأۡمُرۡ قَوۡمَكَ يَأۡخُذُواْ بِأَحۡسَنِهَاۚ سَأُوْرِيكُمۡ دَارَ ٱلۡفَٰسِقِينَ (145) سَأَصۡرِفُ عَنۡ ءَايَٰتِيَ ٱلَّذِينَ يَتَكَبَّرُونَ فِي ٱلۡأَرۡضِ بِغَيۡرِ ٱلۡحَقِّ وَإِن يَرَوۡاْ كُلَّ ءَايَةٖ لَّا يُؤۡمِنُواْ بِهَا وَإِن يَرَوۡاْ سَبِيلَ ٱلرُّشۡدِ لَا يَتَّخِذُوهُ سَبِيلٗا وَإِن يَرَوۡاْ سَبِيلَ ٱلۡغَيِّ يَتَّخِذُوهُ سَبِيلٗاۚ ذَٰلِكَ بِأَنَّهُمۡ كَذَّبُواْ بِـَٔايَٰتِنَا وَكَانُواْ عَنۡهَا غَٰفِلِينَ (146) وَٱلَّذِينَ كَذَّبُواْ بِـَٔايَٰتِنَا وَلِقَآءِ ٱلۡأٓخِرَةِ حَبِطَتۡ أَعۡمَٰلُهُمۡۚ هَلۡ يُجۡزَوۡنَ إِلَّا مَا كَانُواْ يَعۡمَلُونَ (147) وَٱتَّخَذَ قَوۡمُ مُوسَىٰ مِنۢ بَعۡدِهِۦ مِنۡ حُلِيِّهِمۡ عِجۡلٗا جَسَدٗا لَّهُۥ خُوَارٌۚ أَلَمۡ يَرَوۡاْ أَنَّهُۥ لَا يُكَلِّمُهُمۡ وَلَا يَهۡدِيهِمۡ سَبِيلًاۘ ٱتَّخَذُوهُ وَكَانُواْ ظَٰلِمِينَ (148) وَلَمَّا سُقِطَ فِيٓ أَيۡدِيهِمۡ وَرَأَوۡاْ أَنَّهُمۡ قَدۡ ضَلُّواْ قَالُواْ لَئِن لَّمۡ يَرۡحَمۡنَا رَبُّنَا وَيَغۡفِرۡ لَنَا لَنَكُونَنَّ مِنَ ٱلۡخَٰسِرِينَ (149) وَلَمَّا رَجَعَ مُوسَىٰٓ إِلَىٰ قَوۡمِهِۦ غَضۡبَٰنَ أَسِفٗا قَالَ بِئۡسَمَا خَلَفۡتُمُونِي مِنۢ بَعۡدِيٓۖ أَعَجِلۡتُمۡ أَمۡرَ رَبِّكُمۡۖ وَأَلۡقَى ٱلۡأَلۡوَاحَ وَأَخَذَ بِرَأۡسِ أَخِيهِ يَجُرُّهُۥٓ إِلَيۡهِۚ قَالَ ٱبۡنَ أُمَّ إِنَّ ٱلۡقَوۡمَ ٱسۡتَضۡعَفُونِي وَكَادُواْ يَقۡتُلُونَنِي فَلَا تُشۡمِتۡ بِيَ ٱلۡأَعۡدَآءَ وَلَا تَجۡعَلۡنِي مَعَ ٱلۡقَوۡمِ ٱلظَّٰلِمِينَ (150) قَالَ رَبِّ ٱغۡفِرۡ لِي وَلِأَخِي وَأَدۡخِلۡنَا فِي رَحۡمَتِكَۖ وَأَنتَ أَرۡحَمُ ٱلرَّٰحِمِينَ (151) إِنَّ ٱلَّذِينَ ٱتَّخَذُواْ ٱلۡعِجۡلَ سَيَنَالُهُمۡ غَضَبٞ مِّن رَّبِّهِمۡ وَذِلَّةٞ فِي ٱلۡحَيَوٰةِ ٱلدُّنۡيَاۚ وَكَذَٰلِكَ نَجۡزِي ٱلۡمُفۡتَرِينَ (152) وَٱلَّذِينَ عَمِلُواْ ٱلسَّيِّـَٔاتِ ثُمَّ تَابُواْ مِنۢ بَعۡدِهَا وَءَامَنُوٓاْ إِنَّ رَبَّكَ مِنۢ بَعۡدِهَا لَغَفُورٞ رَّحِيمٞ (153) وَلَمَّا سَكَتَ عَن مُّوسَى ٱلۡغَضَبُ أَخَذَ ٱلۡأَلۡوَاحَۖ وَفِي نُسۡخَتِهَا هُدٗى وَرَحۡمَةٞ لِّلَّذِينَ هُمۡ لِرَبِّهِمۡ يَرۡهَبُونَ (154) وَٱخۡتَارَ مُوسَىٰ قَوۡمَهُۥ سَبۡعِينَ رَجُلٗا لِّمِيقَٰتِنَاۖ فَلَمَّآ أَخَذَتۡهُمُ ٱلرَّجۡفَةُ قَالَ رَبِّ لَوۡ شِئۡتَ أَهۡلَكۡتَهُم مِّن قَبۡلُ وَإِيَّٰيَۖ أَتُهۡلِكُنَا بِمَا فَعَلَ ٱلسُّفَهَآءُ مِنَّآۖ إِنۡ هِيَ إِلَّا فِتۡنَتُكَ تُضِلُّ بِهَا مَن تَشَآءُ وَتَهۡدِي مَن تَشَآءُۖ أَنتَ وَلِيُّنَا فَٱغۡفِرۡ لَنَا وَٱرۡحَمۡنَاۖ وَأَنتَ خَيۡرُ ٱلۡغَٰفِرِينَ (155) ۞وَٱكۡتُبۡ لَنَا فِي هَٰذِهِ ٱلدُّنۡيَا حَسَنَةٗ وَفِي ٱلۡأٓخِرَةِ إِنَّا هُدۡنَآ إِلَيۡكَۚ قَالَ عَذَابِيٓ أُصِيبُ بِهِۦ مَنۡ أَشَآءُۖ وَرَحۡمَتِي وَسِعَتۡ كُلَّ شَيۡءٖۚ فَسَأَكۡتُبُهَا لِلَّذِينَ يَتَّقُونَ وَيُؤۡتُونَ ٱلزَّكَوٰةَ وَٱلَّذِينَ هُم بِـَٔايَٰتِنَا يُؤۡمِنُونَ (156) ٱلَّذِينَ يَتَّبِعُونَ ٱلرَّسُولَ ٱلنَّبِيَّ ٱلۡأُمِّيَّ ٱلَّذِي يَجِدُونَهُۥ مَكۡتُوبًا عِندَهُمۡ فِي ٱلتَّوۡرَىٰةِ وَٱلۡإِنجِيلِ يَأۡمُرُهُم بِٱلۡمَعۡرُوفِ وَيَنۡهَىٰهُمۡ عَنِ ٱلۡمُنكَرِ وَيُحِلُّ لَهُمُ ٱلطَّيِّبَٰتِ وَيُحَرِّمُ عَلَيۡهِمُ ٱلۡخَبَٰٓئِثَ وَيَضَعُ عَنۡهُمۡ إِصۡرَهُمۡ وَٱلۡأَغۡلَٰلَ ٱلَّتِي كَانَتۡ عَلَيۡهِمۡۚ فَٱلَّذِينَ ءَامَنُواْ بِهِۦ وَعَزَّرُوهُ وَنَصَرُوهُ وَٱتَّبَعُواْ ٱلنُّورَ ٱلَّذِيٓ أُنزِلَ مَعَهُۥٓ أُوْلَٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ (157) قُلۡ يَٰٓأَيُّهَا ٱلنَّاسُ إِنِّي رَسُولُ ٱللَّهِ إِلَيۡكُمۡ جَمِيعًا ٱلَّذِي لَهُۥ مُلۡكُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۖ لَآ إِلَٰهَ إِلَّا هُوَ يُحۡيِۦ وَيُمِيتُۖ فَـَٔامِنُواْ بِٱللَّهِ وَرَسُولِهِ ٱلنَّبِيِّ ٱلۡأُمِّيِّ ٱلَّذِي يُؤۡمِنُ بِٱللَّهِ وَكَلِمَٰتِهِۦ وَٱتَّبِعُوهُ لَعَلَّكُمۡ تَهۡتَدُونَ (158) وَمِن قَوۡمِ مُوسَىٰٓ أُمَّةٞ يَهۡدُونَ بِٱلۡحَقِّ وَبِهِۦ يَعۡدِلُونَ (159) وَقَطَّعۡنَٰهُمُ ٱثۡنَتَيۡ عَشۡرَةَ أَسۡبَاطًا أُمَمٗاۚ وَأَوۡحَيۡنَآ إِلَىٰ مُوسَىٰٓ إِذِ ٱسۡتَسۡقَىٰهُ قَوۡمُهُۥٓ أَنِ ٱضۡرِب بِّعَصَاكَ ٱلۡحَجَرَۖ فَٱنۢبَجَسَتۡ مِنۡهُ ٱثۡنَتَا عَشۡرَةَ عَيۡنٗاۖ قَدۡ عَلِمَ كُلُّ أُنَاسٖ مَّشۡرَبَهُمۡۚ وَظَلَّلۡنَا عَلَيۡهِمُ ٱلۡغَمَٰمَ وَأَنزَلۡنَا عَلَيۡهِمُ ٱلۡمَنَّ وَٱلسَّلۡوَىٰۖ كُلُواْ مِن طَيِّبَٰتِ مَا رَزَقۡنَٰكُمۡۚ وَمَا ظَلَمُونَا وَلَٰكِن كَانُوٓاْ أَنفُسَهُمۡ يَظۡلِمُونَ (160) وَإِذۡ قِيلَ لَهُمُ ٱسۡكُنُواْ هَٰذِهِ ٱلۡقَرۡيَةَ وَكُلُواْ مِنۡهَا حَيۡثُ شِئۡتُمۡ وَقُولُواْ حِطَّةٞ وَٱدۡخُلُواْ ٱلۡبَابَ سُجَّدٗا نَّغۡفِرۡ لَكُمۡ خَطِيٓـَٰٔتِكُمۡۚ سَنَزِيدُ ٱلۡمُحۡسِنِينَ (161) فَبَدَّلَ ٱلَّذِينَ ظَلَمُواْ مِنۡهُمۡ قَوۡلًا غَيۡرَ ٱلَّذِي قِيلَ لَهُمۡ فَأَرۡسَلۡنَا عَلَيۡهِمۡ رِجۡزٗا مِّنَ ٱلسَّمَآءِ بِمَا كَانُواْ يَظۡلِمُونَ (162) وَسۡـَٔلۡهُمۡ عَنِ ٱلۡقَرۡيَةِ ٱلَّتِي كَانَتۡ حَاضِرَةَ ٱلۡبَحۡرِ إِذۡ يَعۡدُونَ فِي ٱلسَّبۡتِ إِذۡ تَأۡتِيهِمۡ حِيتَانُهُمۡ يَوۡمَ سَبۡتِهِمۡ شُرَّعٗا وَيَوۡمَ لَا يَسۡبِتُونَ لَا تَأۡتِيهِمۡۚ كَذَٰلِكَ نَبۡلُوهُم بِمَا كَانُواْ يَفۡسُقُونَ (163) وَإِذۡ قَالَتۡ أُمَّةٞ مِّنۡهُمۡ لِمَ تَعِظُونَ قَوۡمًا ٱللَّهُ مُهۡلِكُهُمۡ أَوۡ مُعَذِّبُهُمۡ عَذَابٗا شَدِيدٗاۖ قَالُواْ مَعۡذِرَةً إِلَىٰ رَبِّكُمۡ وَلَعَلَّهُمۡ يَتَّقُونَ (164) فَلَمَّا نَسُواْ مَا ذُكِّرُواْ بِهِۦٓ أَنجَيۡنَا ٱلَّذِينَ يَنۡهَوۡنَ عَنِ ٱلسُّوٓءِ وَأَخَذۡنَا ٱلَّذِينَ ظَلَمُواْ بِعَذَابِۭ بَـِٔيسِۭ بِمَا كَانُواْ يَفۡسُقُونَ (165) فَلَمَّا عَتَوۡاْ عَن مَّا نُهُواْ عَنۡهُ قُلۡنَا لَهُمۡ كُونُواْ قِرَدَةً خَٰسِـِٔينَ (166) وَإِذۡ تَأَذَّنَ رَبُّكَ لَيَبۡعَثَنَّ عَلَيۡهِمۡ إِلَىٰ يَوۡمِ ٱلۡقِيَٰمَةِ مَن يَسُومُهُمۡ سُوٓءَ ٱلۡعَذَابِۗ إِنَّ رَبَّكَ لَسَرِيعُ ٱلۡعِقَابِ وَإِنَّهُۥ لَغَفُورٞ رَّحِيمٞ (167) وَقَطَّعۡنَٰهُمۡ فِي ٱلۡأَرۡضِ أُمَمٗاۖ مِّنۡهُمُ ٱلصَّٰلِحُونَ وَمِنۡهُمۡ دُونَ ذَٰلِكَۖ وَبَلَوۡنَٰهُم بِٱلۡحَسَنَٰتِ وَٱلسَّيِّـَٔاتِ لَعَلَّهُمۡ يَرۡجِعُونَ (168) فَخَلَفَ مِنۢ بَعۡدِهِمۡ خَلۡفٞ وَرِثُواْ ٱلۡكِتَٰبَ يَأۡخُذُونَ عَرَضَ هَٰذَا ٱلۡأَدۡنَىٰ وَيَقُولُونَ سَيُغۡفَرُ لَنَا وَإِن يَأۡتِهِمۡ عَرَضٞ مِّثۡلُهُۥ يَأۡخُذُوهُۚ أَلَمۡ يُؤۡخَذۡ عَلَيۡهِم مِّيثَٰقُ ٱلۡكِتَٰبِ أَن لَّا يَقُولُواْ عَلَى ٱللَّهِ إِلَّا ٱلۡحَقَّ وَدَرَسُواْ مَا فِيهِۗ وَٱلدَّارُ ٱلۡأٓخِرَةُ خَيۡرٞ لِّلَّذِينَ يَتَّقُونَۚ أَفَلَا تَعۡقِلُونَ (169) وَٱلَّذِينَ يُمَسِّكُونَ بِٱلۡكِتَٰبِ وَأَقَامُواْ ٱلصَّلَوٰةَ إِنَّا لَا نُضِيعُ أَجۡرَ ٱلۡمُصۡلِحِينَ (170) ۞وَإِذۡ نَتَقۡنَا ٱلۡجَبَلَ فَوۡقَهُمۡ كَأَنَّهُۥ ظُلَّةٞ وَظَنُّوٓاْ أَنَّهُۥ وَاقِعُۢ بِهِمۡ خُذُواْ مَآ ءَاتَيۡنَٰكُم بِقُوَّةٖ وَٱذۡكُرُواْ مَا فِيهِ لَعَلَّكُمۡ تَتَّقُونَ (171) وَإِذۡ أَخَذَ رَبُّكَ مِنۢ بَنِيٓ ءَادَمَ مِن ظُهُورِهِمۡ ذُرِّيَّتَهُمۡ وَأَشۡهَدَهُمۡ عَلَىٰٓ أَنفُسِهِمۡ أَلَسۡتُ بِرَبِّكُمۡۖ قَالُواْ بَلَىٰ شَهِدۡنَآۚ أَن تَقُولُواْ يَوۡمَ ٱلۡقِيَٰمَةِ إِنَّا كُنَّا عَنۡ هَٰذَا غَٰفِلِينَ (172) أَوۡ تَقُولُوٓاْ إِنَّمَآ أَشۡرَكَ ءَابَآؤُنَا مِن قَبۡلُ وَكُنَّا ذُرِّيَّةٗ مِّنۢ بَعۡدِهِمۡۖ أَفَتُهۡلِكُنَا بِمَا فَعَلَ ٱلۡمُبۡطِلُونَ (173) وَكَذَٰلِكَ نُفَصِّلُ ٱلۡأٓيَٰتِ وَلَعَلَّهُمۡ يَرۡجِعُونَ (174) وَٱتۡلُ عَلَيۡهِمۡ نَبَأَ ٱلَّذِيٓ ءَاتَيۡنَٰهُ ءَايَٰتِنَا فَٱنسَلَخَ مِنۡهَا فَأَتۡبَعَهُ ٱلشَّيۡطَٰنُ فَكَانَ مِنَ ٱلۡغَاوِينَ (175) وَلَوۡ شِئۡنَا لَرَفَعۡنَٰهُ بِهَا وَلَٰكِنَّهُۥٓ أَخۡلَدَ إِلَى ٱلۡأَرۡضِ وَٱتَّبَعَ هَوَىٰهُۚ فَمَثَلُهُۥ كَمَثَلِ ٱلۡكَلۡبِ إِن تَحۡمِلۡ عَلَيۡهِ يَلۡهَثۡ أَوۡ تَتۡرُكۡهُ يَلۡهَثۚ ذَّٰلِكَ مَثَلُ ٱلۡقَوۡمِ ٱلَّذِينَ كَذَّبُواْ بِـَٔايَٰتِنَاۚ فَٱقۡصُصِ ٱلۡقَصَصَ لَعَلَّهُمۡ يَتَفَكَّرُونَ (176) سَآءَ مَثَلًا ٱلۡقَوۡمُ ٱلَّذِينَ كَذَّبُواْ بِـَٔايَٰتِنَا وَأَنفُسَهُمۡ كَانُواْ يَظۡلِمُونَ (177) مَن يَهۡدِ ٱللَّهُ فَهُوَ ٱلۡمُهۡتَدِيۖ وَمَن يُضۡلِلۡ فَأُوْلَٰٓئِكَ هُمُ ٱلۡخَٰسِرُونَ (178) وَلَقَدۡ ذَرَأۡنَا لِجَهَنَّمَ كَثِيرٗا مِّنَ ٱلۡجِنِّ وَٱلۡإِنسِۖ لَهُمۡ قُلُوبٞ لَّا يَفۡقَهُونَ بِهَا وَلَهُمۡ أَعۡيُنٞ لَّا يُبۡصِرُونَ بِهَا وَلَهُمۡ ءَاذَانٞ لَّا يَسۡمَعُونَ بِهَآۚ أُوْلَٰٓئِكَ كَٱلۡأَنۡعَٰمِ بَلۡ هُمۡ أَضَلُّۚ أُوْلَٰٓئِكَ هُمُ ٱلۡغَٰفِلُونَ (179) وَلِلَّهِ ٱلۡأَسۡمَآءُ ٱلۡحُسۡنَىٰ فَٱدۡعُوهُ بِهَاۖ وَذَرُواْ ٱلَّذِينَ يُلۡحِدُونَ فِيٓ أَسۡمَٰٓئِهِۦۚ سَيُجۡزَوۡنَ مَا كَانُواْ يَعۡمَلُونَ (180) وَمِمَّنۡ خَلَقۡنَآ أُمَّةٞ يَهۡدُونَ بِٱلۡحَقِّ وَبِهِۦ يَعۡدِلُونَ (181) وَٱلَّذِينَ كَذَّبُواْ بِـَٔايَٰتِنَا سَنَسۡتَدۡرِجُهُم مِّنۡ حَيۡثُ لَا يَعۡلَمُونَ (182) وَأُمۡلِي لَهُمۡۚ إِنَّ كَيۡدِي مَتِينٌ (183) أَوَلَمۡ يَتَفَكَّرُواْۗ مَا بِصَاحِبِهِم مِّن جِنَّةٍۚ إِنۡ هُوَ إِلَّا نَذِيرٞ مُّبِينٌ (184) أَوَلَمۡ يَنظُرُواْ فِي مَلَكُوتِ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَمَا خَلَقَ ٱللَّهُ مِن شَيۡءٖ وَأَنۡ عَسَىٰٓ أَن يَكُونَ قَدِ ٱقۡتَرَبَ أَجَلُهُمۡۖ فَبِأَيِّ حَدِيثِۭ بَعۡدَهُۥ يُؤۡمِنُونَ (185) مَن يُضۡلِلِ ٱللَّهُ فَلَا هَادِيَ لَهُۥۚ وَيَذَرُهُمۡ فِي طُغۡيَٰنِهِمۡ يَعۡمَهُونَ (186) يَسۡـَٔلُونَكَ عَنِ ٱلسَّاعَةِ أَيَّانَ مُرۡسَىٰهَاۖ قُلۡ إِنَّمَا عِلۡمُهَا عِندَ رَبِّيۖ لَا يُجَلِّيهَا لِوَقۡتِهَآ إِلَّا هُوَۚ ثَقُلَتۡ فِي ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۚ لَا تَأۡتِيكُمۡ إِلَّا بَغۡتَةٗۗ يَسۡـَٔلُونَكَ كَأَنَّكَ حَفِيٌّ عَنۡهَاۖ قُلۡ إِنَّمَا عِلۡمُهَا عِندَ ٱللَّهِ وَلَٰكِنَّ أَكۡثَرَ ٱلنَّاسِ لَا يَعۡلَمُونَ (187) قُل لَّآ أَمۡلِكُ لِنَفۡسِي نَفۡعٗا وَلَا ضَرًّا إِلَّا مَا شَآءَ ٱللَّهُۚ وَلَوۡ كُنتُ أَعۡلَمُ ٱلۡغَيۡبَ لَٱسۡتَكۡثَرۡتُ مِنَ ٱلۡخَيۡرِ وَمَا مَسَّنِيَ ٱلسُّوٓءُۚ إِنۡ أَنَا۠ إِلَّا نَذِيرٞ وَبَشِيرٞ لِّقَوۡمٖ يُؤۡمِنُونَ (188) ۞هُوَ ٱلَّذِي خَلَقَكُم مِّن نَّفۡسٖ وَٰحِدَةٖ وَجَعَلَ مِنۡهَا زَوۡجَهَا لِيَسۡكُنَ إِلَيۡهَاۖ فَلَمَّا تَغَشَّىٰهَا حَمَلَتۡ حَمۡلًا خَفِيفٗا فَمَرَّتۡ بِهِۦۖ فَلَمَّآ أَثۡقَلَت دَّعَوَا ٱللَّهَ رَبَّهُمَا لَئِنۡ ءَاتَيۡتَنَا صَٰلِحٗا لَّنَكُونَنَّ مِنَ ٱلشَّٰكِرِينَ (189) فَلَمَّآ ءَاتَىٰهُمَا صَٰلِحٗا جَعَلَا لَهُۥ شُرَكَآءَ فِيمَآ ءَاتَىٰهُمَاۚ فَتَعَٰلَى ٱللَّهُ عَمَّا يُشۡرِكُونَ (190) أَيُشۡرِكُونَ مَا لَا يَخۡلُقُ شَيۡـٔٗا وَهُمۡ يُخۡلَقُونَ (191) وَلَا يَسۡتَطِيعُونَ لَهُمۡ نَصۡرٗا وَلَآ أَنفُسَهُمۡ يَنصُرُونَ (192) وَإِن تَدۡعُوهُمۡ إِلَى ٱلۡهُدَىٰ لَا يَتَّبِعُوكُمۡۚ سَوَآءٌ عَلَيۡكُمۡ أَدَعَوۡتُمُوهُمۡ أَمۡ أَنتُمۡ صَٰمِتُونَ (193) إِنَّ ٱلَّذِينَ تَدۡعُونَ مِن دُونِ ٱللَّهِ عِبَادٌ أَمۡثَالُكُمۡۖ فَٱدۡعُوهُمۡ فَلۡيَسۡتَجِيبُواْ لَكُمۡ إِن كُنتُمۡ صَٰدِقِينَ (194) أَلَهُمۡ أَرۡجُلٞ يَمۡشُونَ بِهَآۖ أَمۡ لَهُمۡ أَيۡدٖ يَبۡطِشُونَ بِهَآۖ أَمۡ لَهُمۡ أَعۡيُنٞ يُبۡصِرُونَ بِهَآۖ أَمۡ لَهُمۡ ءَاذَانٞ يَسۡمَعُونَ بِهَاۗ قُلِ ٱدۡعُواْ شُرَكَآءَكُمۡ ثُمَّ كِيدُونِ فَلَا تُنظِرُونِ (195) إِنَّ وَلِـِّۧيَ ٱللَّهُ ٱلَّذِي نَزَّلَ ٱلۡكِتَٰبَۖ وَهُوَ يَتَوَلَّى ٱلصَّٰلِحِينَ (196) وَٱلَّذِينَ تَدۡعُونَ مِن دُونِهِۦ لَا يَسۡتَطِيعُونَ نَصۡرَكُمۡ وَلَآ أَنفُسَهُمۡ يَنصُرُونَ (197) وَإِن تَدۡعُوهُمۡ إِلَى ٱلۡهُدَىٰ لَا يَسۡمَعُواْۖ وَتَرَىٰهُمۡ يَنظُرُونَ إِلَيۡكَ وَهُمۡ لَا يُبۡصِرُونَ (198) خُذِ ٱلۡعَفۡوَ وَأۡمُرۡ بِٱلۡعُرۡفِ وَأَعۡرِضۡ عَنِ ٱلۡجَٰهِلِينَ (199) وَإِمَّا يَنزَغَنَّكَ مِنَ ٱلشَّيۡطَٰنِ نَزۡغٞ فَٱسۡتَعِذۡ بِٱللَّهِۚ إِنَّهُۥ سَمِيعٌ عَلِيمٌ (200) إِنَّ ٱلَّذِينَ ٱتَّقَوۡاْ إِذَا مَسَّهُمۡ طَٰٓئِفٞ مِّنَ ٱلشَّيۡطَٰنِ تَذَكَّرُواْ فَإِذَا هُم مُّبۡصِرُونَ (201) وَإِخۡوَٰنُهُمۡ يَمُدُّونَهُمۡ فِي ٱلۡغَيِّ ثُمَّ لَا يُقۡصِرُونَ (202) وَإِذَا لَمۡ تَأۡتِهِم بِـَٔايَةٖ قَالُواْ لَوۡلَا ٱجۡتَبَيۡتَهَاۚ قُلۡ إِنَّمَآ أَتَّبِعُ مَا يُوحَىٰٓ إِلَيَّ مِن رَّبِّيۚ هَٰذَا بَصَآئِرُ مِن رَّبِّكُمۡ وَهُدٗى وَرَحۡمَةٞ لِّقَوۡمٖ يُؤۡمِنُونَ (203) وَإِذَا قُرِئَ ٱلۡقُرۡءَانُ فَٱسۡتَمِعُواْ لَهُۥ وَأَنصِتُواْ لَعَلَّكُمۡ تُرۡحَمُونَ (204) وَٱذۡكُر رَّبَّكَ فِي نَفۡسِكَ تَضَرُّعٗا وَخِيفَةٗ وَدُونَ ٱلۡجَهۡرِ مِنَ ٱلۡقَوۡلِ بِٱلۡغُدُوِّ وَٱلۡأٓصَالِ وَلَا تَكُن مِّنَ ٱلۡغَٰفِلِينَ (205) إِنَّ ٱلَّذِينَ عِندَ رَبِّكَ لَا يَسۡتَكۡبِرُونَ عَنۡ عِبَادَتِهِۦ وَيُسَبِّحُونَهُۥ وَلَهُۥ يَسۡجُدُونَۤ۩ (206)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default Seven;