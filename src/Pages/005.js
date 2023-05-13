import React from 'react';
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const Five = () => {
  return (
    <div>
      <Helmet>
        <title>005 - سورة المائدة</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة المائدة</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓاْ أَوۡفُواْ بِٱلۡعُقُودِۚ أُحِلَّتۡ لَكُم بَهِيمَةُ ٱلۡأَنۡعَٰمِ إِلَّا مَا يُتۡلَىٰ عَلَيۡكُمۡ غَيۡرَ مُحِلِّي ٱلصَّيۡدِ وَأَنتُمۡ حُرُمٌۗ إِنَّ ٱللَّهَ يَحۡكُمُ مَا يُرِيدُ (1) يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا تُحِلُّواْ شَعَٰٓئِرَ ٱللَّهِ وَلَا ٱلشَّهۡرَ ٱلۡحَرَامَ وَلَا ٱلۡهَدۡيَ وَلَا ٱلۡقَلَٰٓئِدَ وَلَآ ءَآمِّينَ ٱلۡبَيۡتَ ٱلۡحَرَامَ يَبۡتَغُونَ فَضۡلٗا مِّن رَّبِّهِمۡ وَرِضۡوَٰنٗاۚ وَإِذَا حَلَلۡتُمۡ فَٱصۡطَادُواْۚ وَلَا يَجۡرِمَنَّكُمۡ شَنَـَٔانُ قَوۡمٍ أَن صَدُّوكُمۡ عَنِ ٱلۡمَسۡجِدِ ٱلۡحَرَامِ أَن تَعۡتَدُواْۘ وَتَعَاوَنُواْ عَلَى ٱلۡبِرِّ وَٱلتَّقۡوَىٰۖ وَلَا تَعَاوَنُواْ عَلَى ٱلۡإِثۡمِ وَٱلۡعُدۡوَٰنِۚ وَٱتَّقُواْ ٱللَّهَۖ إِنَّ ٱللَّهَ شَدِيدُ ٱلۡعِقَابِ (2) حُرِّمَتۡ عَلَيۡكُمُ ٱلۡمَيۡتَةُ وَٱلدَّمُ وَلَحۡمُ ٱلۡخِنزِيرِ وَمَآ أُهِلَّ لِغَيۡرِ ٱللَّهِ بِهِۦ وَٱلۡمُنۡخَنِقَةُ وَٱلۡمَوۡقُوذَةُ وَٱلۡمُتَرَدِّيَةُ وَٱلنَّطِيحَةُ وَمَآ أَكَلَ ٱلسَّبُعُ إِلَّا مَا ذَكَّيۡتُمۡ وَمَا ذُبِحَ عَلَى ٱلنُّصُبِ وَأَن تَسۡتَقۡسِمُواْ بِٱلۡأَزۡلَٰمِۚ ذَٰلِكُمۡ فِسۡقٌۗ ٱلۡيَوۡمَ يَئِسَ ٱلَّذِينَ كَفَرُواْ مِن دِينِكُمۡ فَلَا تَخۡشَوۡهُمۡ وَٱخۡشَوۡنِۚ ٱلۡيَوۡمَ أَكۡمَلۡتُ لَكُمۡ دِينَكُمۡ وَأَتۡمَمۡتُ عَلَيۡكُمۡ نِعۡمَتِي وَرَضِيتُ لَكُمُ ٱلۡإِسۡلَٰمَ دِينٗاۚ فَمَنِ ٱضۡطُرَّ فِي مَخۡمَصَةٍ غَيۡرَ مُتَجَانِفٖ لِّإِثۡمٖ فَإِنَّ ٱللَّهَ غَفُورٞ رَّحِيمٞ (3) يَسۡـَٔلُونَكَ مَاذَآ أُحِلَّ لَهُمۡۖ قُلۡ أُحِلَّ لَكُمُ ٱلطَّيِّبَٰتُ وَمَا عَلَّمۡتُم مِّنَ ٱلۡجَوَارِحِ مُكَلِّبِينَ تُعَلِّمُونَهُنَّ مِمَّا عَلَّمَكُمُ ٱللَّهُۖ فَكُلُواْ مِمَّآ أَمۡسَكۡنَ عَلَيۡكُمۡ وَٱذۡكُرُواْ ٱسۡمَ ٱللَّهِ عَلَيۡهِۖ وَٱتَّقُواْ ٱللَّهَۚ إِنَّ ٱللَّهَ سَرِيعُ ٱلۡحِسَابِ (4) ٱلۡيَوۡمَ أُحِلَّ لَكُمُ ٱلطَّيِّبَٰتُۖ وَطَعَامُ ٱلَّذِينَ أُوتُواْ ٱلۡكِتَٰبَ حِلّٞ لَّكُمۡ وَطَعَامُكُمۡ حِلّٞ لَّهُمۡۖ وَٱلۡمُحۡصَنَٰتُ مِنَ ٱلۡمُؤۡمِنَٰتِ وَٱلۡمُحۡصَنَٰتُ مِنَ ٱلَّذِينَ أُوتُواْ ٱلۡكِتَٰبَ مِن قَبۡلِكُمۡ إِذَآ ءَاتَيۡتُمُوهُنَّ أُجُورَهُنَّ مُحۡصِنِينَ غَيۡرَ مُسَٰفِحِينَ وَلَا مُتَّخِذِيٓ أَخۡدَانٖۗ وَمَن يَكۡفُرۡ بِٱلۡإِيمَٰنِ فَقَدۡ حَبِطَ عَمَلُهُۥ وَهُوَ فِي ٱلۡأٓخِرَةِ مِنَ ٱلۡخَٰسِرِينَ (5) يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓاْ إِذَا قُمۡتُمۡ إِلَى ٱلصَّلَوٰةِ فَٱغۡسِلُواْ وُجُوهَكُمۡ وَأَيۡدِيَكُمۡ إِلَى ٱلۡمَرَافِقِ وَٱمۡسَحُواْ بِرُءُوسِكُمۡ وَأَرۡجُلَكُمۡ إِلَى ٱلۡكَعۡبَيۡنِۚ وَإِن كُنتُمۡ جُنُبٗا فَٱطَّهَّرُواْۚ وَإِن كُنتُم مَّرۡضَىٰٓ أَوۡ عَلَىٰ سَفَرٍ أَوۡ جَآءَ أَحَدٞ مِّنكُم مِّنَ ٱلۡغَآئِطِ أَوۡ لَٰمَسۡتُمُ ٱلنِّسَآءَ فَلَمۡ تَجِدُواْ مَآءٗ فَتَيَمَّمُواْ صَعِيدٗا طَيِّبٗا فَٱمۡسَحُواْ بِوُجُوهِكُمۡ وَأَيۡدِيكُم مِّنۡهُۚ مَا يُرِيدُ ٱللَّهُ لِيَجۡعَلَ عَلَيۡكُم مِّنۡ حَرَجٖ وَلَٰكِن يُرِيدُ لِيُطَهِّرَكُمۡ وَلِيُتِمَّ نِعۡمَتَهُۥ عَلَيۡكُمۡ لَعَلَّكُمۡ تَشۡكُرُونَ (6) وَٱذۡكُرُواْ نِعۡمَةَ ٱللَّهِ عَلَيۡكُمۡ وَمِيثَٰقَهُ ٱلَّذِي وَاثَقَكُم بِهِۦٓ إِذۡ قُلۡتُمۡ سَمِعۡنَا وَأَطَعۡنَاۖ وَٱتَّقُواْ ٱللَّهَۚ إِنَّ ٱللَّهَ عَلِيمُۢ بِذَاتِ ٱلصُّدُورِ (7) يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ كُونُواْ قَوَّٰمِينَ لِلَّهِ شُهَدَآءَ بِٱلۡقِسۡطِۖ وَلَا يَجۡرِمَنَّكُمۡ شَنَـَٔانُ قَوۡمٍ عَلَىٰٓ أَلَّا تَعۡدِلُواْۚ ٱعۡدِلُواْ هُوَ أَقۡرَبُ لِلتَّقۡوَىٰۖ وَٱتَّقُواْ ٱللَّهَۚ إِنَّ ٱللَّهَ خَبِيرُۢ بِمَا تَعۡمَلُونَ (8) وَعَدَ ٱللَّهُ ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ لَهُم مَّغۡفِرَةٞ وَأَجۡرٌ عَظِيمٞ (9) وَٱلَّذِينَ كَفَرُواْ وَكَذَّبُواْ بِـَٔايَٰتِنَآ أُوْلَٰٓئِكَ أَصۡحَٰبُ ٱلۡجَحِيمِ (10) يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱذۡكُرُواْ نِعۡمَتَ ٱللَّهِ عَلَيۡكُمۡ إِذۡ هَمَّ قَوۡمٌ أَن يَبۡسُطُوٓاْ إِلَيۡكُمۡ أَيۡدِيَهُمۡ فَكَفَّ أَيۡدِيَهُمۡ عَنكُمۡۖ وَٱتَّقُواْ ٱللَّهَۚ وَعَلَى ٱللَّهِ فَلۡيَتَوَكَّلِ ٱلۡمُؤۡمِنُونَ (11) ۞وَلَقَدۡ أَخَذَ ٱللَّهُ مِيثَٰقَ بَنِيٓ إِسۡرَٰٓءِيلَ وَبَعَثۡنَا مِنۡهُمُ ٱثۡنَيۡ عَشَرَ نَقِيبٗاۖ وَقَالَ ٱللَّهُ إِنِّي مَعَكُمۡۖ لَئِنۡ أَقَمۡتُمُ ٱلصَّلَوٰةَ وَءَاتَيۡتُمُ ٱلزَّكَوٰةَ وَءَامَنتُم بِرُسُلِي وَعَزَّرۡتُمُوهُمۡ وَأَقۡرَضۡتُمُ ٱللَّهَ قَرۡضًا حَسَنٗا لَّأُكَفِّرَنَّ عَنكُمۡ سَيِّـَٔاتِكُمۡ وَلَأُدۡخِلَنَّكُمۡ جَنَّٰتٖ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُۚ فَمَن كَفَرَ بَعۡدَ ذَٰلِكَ مِنكُمۡ فَقَدۡ ضَلَّ سَوَآءَ ٱلسَّبِيلِ (12) فَبِمَا نَقۡضِهِم مِّيثَٰقَهُمۡ لَعَنَّٰهُمۡ وَجَعَلۡنَا قُلُوبَهُمۡ قَٰسِيَةٗۖ يُحَرِّفُونَ ٱلۡكَلِمَ عَن مَّوَاضِعِهِۦ وَنَسُواْ حَظّٗا مِّمَّا ذُكِّرُواْ بِهِۦۚ وَلَا تَزَالُ تَطَّلِعُ عَلَىٰ خَآئِنَةٖ مِّنۡهُمۡ إِلَّا قَلِيلٗا مِّنۡهُمۡۖ فَٱعۡفُ عَنۡهُمۡ وَٱصۡفَحۡۚ إِنَّ ٱللَّهَ يُحِبُّ ٱلۡمُحۡسِنِينَ (13) وَمِنَ ٱلَّذِينَ قَالُوٓاْ إِنَّا نَصَٰرَىٰٓ أَخَذۡنَا مِيثَٰقَهُمۡ فَنَسُواْ حَظّٗا مِّمَّا ذُكِّرُواْ بِهِۦ فَأَغۡرَيۡنَا بَيۡنَهُمُ ٱلۡعَدَاوَةَ وَٱلۡبَغۡضَآءَ إِلَىٰ يَوۡمِ ٱلۡقِيَٰمَةِۚ وَسَوۡفَ يُنَبِّئُهُمُ ٱللَّهُ بِمَا كَانُواْ يَصۡنَعُونَ (14) يَٰٓأَهۡلَ ٱلۡكِتَٰبِ قَدۡ جَآءَكُمۡ رَسُولُنَا يُبَيِّنُ لَكُمۡ كَثِيرٗا مِّمَّا كُنتُمۡ تُخۡفُونَ مِنَ ٱلۡكِتَٰبِ وَيَعۡفُواْ عَن كَثِيرٖۚ قَدۡ جَآءَكُم مِّنَ ٱللَّهِ نُورٞ وَكِتَٰبٞ مُّبِينٞ (15) يَهۡدِي بِهِ ٱللَّهُ مَنِ ٱتَّبَعَ رِضۡوَٰنَهُۥ سُبُلَ ٱلسَّلَٰمِ وَيُخۡرِجُهُم مِّنَ ٱلظُّلُمَٰتِ إِلَى ٱلنُّورِ بِإِذۡنِهِۦ وَيَهۡدِيهِمۡ إِلَىٰ صِرَٰطٖ مُّسۡتَقِيمٖ (16) لَّقَدۡ كَفَرَ ٱلَّذِينَ قَالُوٓاْ إِنَّ ٱللَّهَ هُوَ ٱلۡمَسِيحُ ٱبۡنُ مَرۡيَمَۚ قُلۡ فَمَن يَمۡلِكُ مِنَ ٱللَّهِ شَيۡـًٔا إِنۡ أَرَادَ أَن يُهۡلِكَ ٱلۡمَسِيحَ ٱبۡنَ مَرۡيَمَ وَأُمَّهُۥ وَمَن فِي ٱلۡأَرۡضِ جَمِيعٗاۗ وَلِلَّهِ مُلۡكُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَمَا بَيۡنَهُمَاۚ يَخۡلُقُ مَا يَشَآءُۚ وَٱللَّهُ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٞ (17) وَقَالَتِ ٱلۡيَهُودُ وَٱلنَّصَٰرَىٰ نَحۡنُ أَبۡنَٰٓؤُاْ ٱللَّهِ وَأَحِبَّٰٓؤُهُۥۚ قُلۡ فَلِمَ يُعَذِّبُكُم بِذُنُوبِكُمۖ بَلۡ أَنتُم بَشَرٞ مِّمَّنۡ خَلَقَۚ يَغۡفِرُ لِمَن يَشَآءُ وَيُعَذِّبُ مَن يَشَآءُۚ وَلِلَّهِ مُلۡكُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَمَا بَيۡنَهُمَاۖ وَإِلَيۡهِ ٱلۡمَصِيرُ (18) يَٰٓأَهۡلَ ٱلۡكِتَٰبِ قَدۡ جَآءَكُمۡ رَسُولُنَا يُبَيِّنُ لَكُمۡ عَلَىٰ فَتۡرَةٖ مِّنَ ٱلرُّسُلِ أَن تَقُولُواْ مَا جَآءَنَا مِنۢ بَشِيرٖ وَلَا نَذِيرٖۖ فَقَدۡ جَآءَكُم بَشِيرٞ وَنَذِيرٞۗ وَٱللَّهُ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٞ (19) وَإِذۡ قَالَ مُوسَىٰ لِقَوۡمِهِۦ يَٰقَوۡمِ ٱذۡكُرُواْ نِعۡمَةَ ٱللَّهِ عَلَيۡكُمۡ إِذۡ جَعَلَ فِيكُمۡ أَنۢبِيَآءَ وَجَعَلَكُم مُّلُوكٗا وَءَاتَىٰكُم مَّا لَمۡ يُؤۡتِ أَحَدٗا مِّنَ ٱلۡعَٰلَمِينَ (20) يَٰقَوۡمِ ٱدۡخُلُواْ ٱلۡأَرۡضَ ٱلۡمُقَدَّسَةَ ٱلَّتِي كَتَبَ ٱللَّهُ لَكُمۡ وَلَا تَرۡتَدُّواْ عَلَىٰٓ أَدۡبَارِكُمۡ فَتَنقَلِبُواْ خَٰسِرِينَ (21) قَالُواْ يَٰمُوسَىٰٓ إِنَّ فِيهَا قَوۡمٗا جَبَّارِينَ وَإِنَّا لَن نَّدۡخُلَهَا حَتَّىٰ يَخۡرُجُواْ مِنۡهَا فَإِن يَخۡرُجُواْ مِنۡهَا فَإِنَّا دَٰخِلُونَ (22) قَالَ رَجُلَانِ مِنَ ٱلَّذِينَ يَخَافُونَ أَنۡعَمَ ٱللَّهُ عَلَيۡهِمَا ٱدۡخُلُواْ عَلَيۡهِمُ ٱلۡبَابَ فَإِذَا دَخَلۡتُمُوهُ فَإِنَّكُمۡ غَٰلِبُونَۚ وَعَلَى ٱللَّهِ فَتَوَكَّلُوٓاْ إِن كُنتُم مُّؤۡمِنِينَ (23) قَالُواْ يَٰمُوسَىٰٓ إِنَّا لَن نَّدۡخُلَهَآ أَبَدٗا مَّا دَامُواْ فِيهَا فَٱذۡهَبۡ أَنتَ وَرَبُّكَ فَقَٰتِلَآ إِنَّا هَٰهُنَا قَٰعِدُونَ (24) قَالَ رَبِّ إِنِّي لَآ أَمۡلِكُ إِلَّا نَفۡسِي وَأَخِيۖ فَٱفۡرُقۡ بَيۡنَنَا وَبَيۡنَ ٱلۡقَوۡمِ ٱلۡفَٰسِقِينَ (25) قَالَ فَإِنَّهَا مُحَرَّمَةٌ عَلَيۡهِمۡۛ أَرۡبَعِينَ سَنَةٗۛ يَتِيهُونَ فِي ٱلۡأَرۡضِۚ فَلَا تَأۡسَ عَلَى ٱلۡقَوۡمِ ٱلۡفَٰسِقِينَ (26) ۞وَٱتۡلُ عَلَيۡهِمۡ نَبَأَ ٱبۡنَيۡ ءَادَمَ بِٱلۡحَقِّ إِذۡ قَرَّبَا قُرۡبَانٗا فَتُقُبِّلَ مِنۡ أَحَدِهِمَا وَلَمۡ يُتَقَبَّلۡ مِنَ ٱلۡأٓخَرِ قَالَ لَأَقۡتُلَنَّكَۖ قَالَ إِنَّمَا يَتَقَبَّلُ ٱللَّهُ مِنَ ٱلۡمُتَّقِينَ (27) لَئِنۢ بَسَطتَ إِلَيَّ يَدَكَ لِتَقۡتُلَنِي مَآ أَنَا۠ بِبَاسِطٖ يَدِيَ إِلَيۡكَ لِأَقۡتُلَكَۖ إِنِّيٓ أَخَافُ ٱللَّهَ رَبَّ ٱلۡعَٰلَمِينَ (28) إِنِّيٓ أُرِيدُ أَن تَبُوٓأَ بِإِثۡمِي وَإِثۡمِكَ فَتَكُونَ مِنۡ أَصۡحَٰبِ ٱلنَّارِۚ وَذَٰلِكَ جَزَٰٓؤُاْ ٱلظَّٰلِمِينَ (29) فَطَوَّعَتۡ لَهُۥ نَفۡسُهُۥ قَتۡلَ أَخِيهِ فَقَتَلَهُۥ فَأَصۡبَحَ مِنَ ٱلۡخَٰسِرِينَ (30) فَبَعَثَ ٱللَّهُ غُرَابٗا يَبۡحَثُ فِي ٱلۡأَرۡضِ لِيُرِيَهُۥ كَيۡفَ يُوَٰرِي سَوۡءَةَ أَخِيهِۚ قَالَ يَٰوَيۡلَتَىٰٓ أَعَجَزۡتُ أَنۡ أَكُونَ مِثۡلَ هَٰذَا ٱلۡغُرَابِ فَأُوَٰرِيَ سَوۡءَةَ أَخِيۖ فَأَصۡبَحَ مِنَ ٱلنَّٰدِمِينَ (31) مِنۡ أَجۡلِ ذَٰلِكَ كَتَبۡنَا عَلَىٰ بَنِيٓ إِسۡرَٰٓءِيلَ أَنَّهُۥ مَن قَتَلَ نَفۡسَۢا بِغَيۡرِ نَفۡسٍ أَوۡ فَسَادٖ فِي ٱلۡأَرۡضِ فَكَأَنَّمَا قَتَلَ ٱلنَّاسَ جَمِيعٗا وَمَنۡ أَحۡيَاهَا فَكَأَنَّمَآ أَحۡيَا ٱلنَّاسَ جَمِيعٗاۚ وَلَقَدۡ جَآءَتۡهُمۡ رُسُلُنَا بِٱلۡبَيِّنَٰتِ ثُمَّ إِنَّ كَثِيرٗا مِّنۡهُم بَعۡدَ ذَٰلِكَ فِي ٱلۡأَرۡضِ لَمُسۡرِفُونَ (32) إِنَّمَا جَزَٰٓؤُاْ ٱلَّذِينَ يُحَارِبُونَ ٱللَّهَ وَرَسُولَهُۥ وَيَسۡعَوۡنَ فِي ٱلۡأَرۡضِ فَسَادًا أَن يُقَتَّلُوٓاْ أَوۡ يُصَلَّبُوٓاْ أَوۡ تُقَطَّعَ أَيۡدِيهِمۡ وَأَرۡجُلُهُم مِّنۡ خِلَٰفٍ أَوۡ يُنفَوۡاْ مِنَ ٱلۡأَرۡضِۚ ذَٰلِكَ لَهُمۡ خِزۡيٞ فِي ٱلدُّنۡيَاۖ وَلَهُمۡ فِي ٱلۡأٓخِرَةِ عَذَابٌ عَظِيمٌ (33) إِلَّا ٱلَّذِينَ تَابُواْ مِن قَبۡلِ أَن تَقۡدِرُواْ عَلَيۡهِمۡۖ فَٱعۡلَمُوٓاْ أَنَّ ٱللَّهَ غَفُورٞ رَّحِيمٞ (34) يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱتَّقُواْ ٱللَّهَ وَٱبۡتَغُوٓاْ إِلَيۡهِ ٱلۡوَسِيلَةَ وَجَٰهِدُواْ فِي سَبِيلِهِۦ لَعَلَّكُمۡ تُفۡلِحُونَ (35) إِنَّ ٱلَّذِينَ كَفَرُواْ لَوۡ أَنَّ لَهُم مَّا فِي ٱلۡأَرۡضِ جَمِيعٗا وَمِثۡلَهُۥ مَعَهُۥ لِيَفۡتَدُواْ بِهِۦ مِنۡ عَذَابِ يَوۡمِ ٱلۡقِيَٰمَةِ مَا تُقُبِّلَ مِنۡهُمۡۖ وَلَهُمۡ عَذَابٌ أَلِيمٞ (36) يُرِيدُونَ أَن يَخۡرُجُواْ مِنَ ٱلنَّارِ وَمَا هُم بِخَٰرِجِينَ مِنۡهَاۖ وَلَهُمۡ عَذَابٞ مُّقِيمٞ (37) وَٱلسَّارِقُ وَٱلسَّارِقَةُ فَٱقۡطَعُوٓاْ أَيۡدِيَهُمَا جَزَآءَۢ بِمَا كَسَبَا نَكَٰلٗا مِّنَ ٱللَّهِۗ وَٱللَّهُ عَزِيزٌ حَكِيمٞ (38) فَمَن تَابَ مِنۢ بَعۡدِ ظُلۡمِهِۦ وَأَصۡلَحَ فَإِنَّ ٱللَّهَ يَتُوبُ عَلَيۡهِۚ إِنَّ ٱللَّهَ غَفُورٞ رَّحِيمٌ (39) أَلَمۡ تَعۡلَمۡ أَنَّ ٱللَّهَ لَهُۥ مُلۡكُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ يُعَذِّبُ مَن يَشَآءُ وَيَغۡفِرُ لِمَن يَشَآءُۗ وَٱللَّهُ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٞ (40) ۞يَٰٓأَيُّهَا ٱلرَّسُولُ لَا يَحۡزُنكَ ٱلَّذِينَ يُسَٰرِعُونَ فِي ٱلۡكُفۡرِ مِنَ ٱلَّذِينَ قَالُوٓاْ ءَامَنَّا بِأَفۡوَٰهِهِمۡ وَلَمۡ تُؤۡمِن قُلُوبُهُمۡۛ وَمِنَ ٱلَّذِينَ هَادُواْۛ سَمَّٰعُونَ لِلۡكَذِبِ سَمَّٰعُونَ لِقَوۡمٍ ءَاخَرِينَ لَمۡ يَأۡتُوكَۖ يُحَرِّفُونَ ٱلۡكَلِمَ مِنۢ بَعۡدِ مَوَاضِعِهِۦۖ يَقُولُونَ إِنۡ أُوتِيتُمۡ هَٰذَا فَخُذُوهُ وَإِن لَّمۡ تُؤۡتَوۡهُ فَٱحۡذَرُواْۚ وَمَن يُرِدِ ٱللَّهُ فِتۡنَتَهُۥ فَلَن تَمۡلِكَ لَهُۥ مِنَ ٱللَّهِ شَيۡـًٔاۚ أُوْلَٰٓئِكَ ٱلَّذِينَ لَمۡ يُرِدِ ٱللَّهُ أَن يُطَهِّرَ قُلُوبَهُمۡۚ لَهُمۡ فِي ٱلدُّنۡيَا خِزۡيٞۖ وَلَهُمۡ فِي ٱلۡأٓخِرَةِ عَذَابٌ عَظِيمٞ (41) سَمَّٰعُونَ لِلۡكَذِبِ أَكَّٰلُونَ لِلسُّحۡتِۚ فَإِن جَآءُوكَ فَٱحۡكُم بَيۡنَهُمۡ أَوۡ أَعۡرِضۡ عَنۡهُمۡۖ وَإِن تُعۡرِضۡ عَنۡهُمۡ فَلَن يَضُرُّوكَ شَيۡـٔٗاۖ وَإِنۡ حَكَمۡتَ فَٱحۡكُم بَيۡنَهُم بِٱلۡقِسۡطِۚ إِنَّ ٱللَّهَ يُحِبُّ ٱلۡمُقۡسِطِينَ (42) وَكَيۡفَ يُحَكِّمُونَكَ وَعِندَهُمُ ٱلتَّوۡرَىٰةُ فِيهَا حُكۡمُ ٱللَّهِ ثُمَّ يَتَوَلَّوۡنَ مِنۢ بَعۡدِ ذَٰلِكَۚ وَمَآ أُوْلَٰٓئِكَ بِٱلۡمُؤۡمِنِينَ (43) إِنَّآ أَنزَلۡنَا ٱلتَّوۡرَىٰةَ فِيهَا هُدٗى وَنُورٞۚ يَحۡكُمُ بِهَا ٱلنَّبِيُّونَ ٱلَّذِينَ أَسۡلَمُواْ لِلَّذِينَ هَادُواْ وَٱلرَّبَّٰنِيُّونَ وَٱلۡأَحۡبَارُ بِمَا ٱسۡتُحۡفِظُواْ مِن كِتَٰبِ ٱللَّهِ وَكَانُواْ عَلَيۡهِ شُهَدَآءَۚ فَلَا تَخۡشَوُاْ ٱلنَّاسَ وَٱخۡشَوۡنِ وَلَا تَشۡتَرُواْ بِـَٔايَٰتِي ثَمَنٗا قَلِيلٗاۚ وَمَن لَّمۡ يَحۡكُم بِمَآ أَنزَلَ ٱللَّهُ فَأُوْلَٰٓئِكَ هُمُ ٱلۡكَٰفِرُونَ (44) وَكَتَبۡنَا عَلَيۡهِمۡ فِيهَآ أَنَّ ٱلنَّفۡسَ بِٱلنَّفۡسِ وَٱلۡعَيۡنَ بِٱلۡعَيۡنِ وَٱلۡأَنفَ بِٱلۡأَنفِ وَٱلۡأُذُنَ بِٱلۡأُذُنِ وَٱلسِّنَّ بِٱلسِّنِّ وَٱلۡجُرُوحَ قِصَاصٞۚ فَمَن تَصَدَّقَ بِهِۦ فَهُوَ كَفَّارَةٞ لَّهُۥۚ وَمَن لَّمۡ يَحۡكُم بِمَآ أَنزَلَ ٱللَّهُ فَأُوْلَٰٓئِكَ هُمُ ٱلظَّٰلِمُونَ (45) وَقَفَّيۡنَا عَلَىٰٓ ءَاثَٰرِهِم بِعِيسَى ٱبۡنِ مَرۡيَمَ مُصَدِّقٗا لِّمَا بَيۡنَ يَدَيۡهِ مِنَ ٱلتَّوۡرَىٰةِۖ وَءَاتَيۡنَٰهُ ٱلۡإِنجِيلَ فِيهِ هُدٗى وَنُورٞ وَمُصَدِّقٗا لِّمَا بَيۡنَ يَدَيۡهِ مِنَ ٱلتَّوۡرَىٰةِ وَهُدٗى وَمَوۡعِظَةٗ لِّلۡمُتَّقِينَ (46) وَلۡيَحۡكُمۡ أَهۡلُ ٱلۡإِنجِيلِ بِمَآ أَنزَلَ ٱللَّهُ فِيهِۚ وَمَن لَّمۡ يَحۡكُم بِمَآ أَنزَلَ ٱللَّهُ فَأُوْلَٰٓئِكَ هُمُ ٱلۡفَٰسِقُونَ (47) وَأَنزَلۡنَآ إِلَيۡكَ ٱلۡكِتَٰبَ بِٱلۡحَقِّ مُصَدِّقٗا لِّمَا بَيۡنَ يَدَيۡهِ مِنَ ٱلۡكِتَٰبِ وَمُهَيۡمِنًا عَلَيۡهِۖ فَٱحۡكُم بَيۡنَهُم بِمَآ أَنزَلَ ٱللَّهُۖ وَلَا تَتَّبِعۡ أَهۡوَآءَهُمۡ عَمَّا جَآءَكَ مِنَ ٱلۡحَقِّۚ لِكُلّٖ جَعَلۡنَا مِنكُمۡ شِرۡعَةٗ وَمِنۡهَاجٗاۚ وَلَوۡ شَآءَ ٱللَّهُ لَجَعَلَكُمۡ أُمَّةٗ وَٰحِدَةٗ وَلَٰكِن لِّيَبۡلُوَكُمۡ فِي مَآ ءَاتَىٰكُمۡۖ فَٱسۡتَبِقُواْ ٱلۡخَيۡرَٰتِۚ إِلَى ٱللَّهِ مَرۡجِعُكُمۡ جَمِيعٗا فَيُنَبِّئُكُم بِمَا كُنتُمۡ فِيهِ تَخۡتَلِفُونَ (48) وَأَنِ ٱحۡكُم بَيۡنَهُم بِمَآ أَنزَلَ ٱللَّهُ وَلَا تَتَّبِعۡ أَهۡوَآءَهُمۡ وَٱحۡذَرۡهُمۡ أَن يَفۡتِنُوكَ عَنۢ بَعۡضِ مَآ أَنزَلَ ٱللَّهُ إِلَيۡكَۖ فَإِن تَوَلَّوۡاْ فَٱعۡلَمۡ أَنَّمَا يُرِيدُ ٱللَّهُ أَن يُصِيبَهُم بِبَعۡضِ ذُنُوبِهِمۡۗ وَإِنَّ كَثِيرٗا مِّنَ ٱلنَّاسِ لَفَٰسِقُونَ (49) أَفَحُكۡمَ ٱلۡجَٰهِلِيَّةِ يَبۡغُونَۚ وَمَنۡ أَحۡسَنُ مِنَ ٱللَّهِ حُكۡمٗا لِّقَوۡمٖ يُوقِنُونَ (50) ۞يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا تَتَّخِذُواْ ٱلۡيَهُودَ وَٱلنَّصَٰرَىٰٓ أَوۡلِيَآءَۘ بَعۡضُهُمۡ أَوۡلِيَآءُ بَعۡضٖۚ وَمَن يَتَوَلَّهُم مِّنكُمۡ فَإِنَّهُۥ مِنۡهُمۡۗ إِنَّ ٱللَّهَ لَا يَهۡدِي ٱلۡقَوۡمَ ٱلظَّٰلِمِينَ (51) فَتَرَى ٱلَّذِينَ فِي قُلُوبِهِم مَّرَضٞ يُسَٰرِعُونَ فِيهِمۡ يَقُولُونَ نَخۡشَىٰٓ أَن تُصِيبَنَا دَآئِرَةٞۚ فَعَسَى ٱللَّهُ أَن يَأۡتِيَ بِٱلۡفَتۡحِ أَوۡ أَمۡرٖ مِّنۡ عِندِهِۦ فَيُصۡبِحُواْ عَلَىٰ مَآ أَسَرُّواْ فِيٓ أَنفُسِهِمۡ نَٰدِمِينَ (52) وَيَقُولُ ٱلَّذِينَ ءَامَنُوٓاْ أَهَٰٓؤُلَآءِ ٱلَّذِينَ أَقۡسَمُواْ بِٱللَّهِ جَهۡدَ أَيۡمَٰنِهِمۡ إِنَّهُمۡ لَمَعَكُمۡۚ حَبِطَتۡ أَعۡمَٰلُهُمۡ فَأَصۡبَحُواْ خَٰسِرِينَ (53) يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ مَن يَرۡتَدَّ مِنكُمۡ عَن دِينِهِۦ فَسَوۡفَ يَأۡتِي ٱللَّهُ بِقَوۡمٖ يُحِبُّهُمۡ وَيُحِبُّونَهُۥٓ أَذِلَّةٍ عَلَى ٱلۡمُؤۡمِنِينَ أَعِزَّةٍ عَلَى ٱلۡكَٰفِرِينَ يُجَٰهِدُونَ فِي سَبِيلِ ٱللَّهِ وَلَا يَخَافُونَ لَوۡمَةَ لَآئِمٖۚ ذَٰلِكَ فَضۡلُ ٱللَّهِ يُؤۡتِيهِ مَن يَشَآءُۚ وَٱللَّهُ وَٰسِعٌ عَلِيمٌ (54) إِنَّمَا وَلِيُّكُمُ ٱللَّهُ وَرَسُولُهُۥ وَٱلَّذِينَ ءَامَنُواْ ٱلَّذِينَ يُقِيمُونَ ٱلصَّلَوٰةَ وَيُؤۡتُونَ ٱلزَّكَوٰةَ وَهُمۡ رَٰكِعُونَ (55) وَمَن يَتَوَلَّ ٱللَّهَ وَرَسُولَهُۥ وَٱلَّذِينَ ءَامَنُواْ فَإِنَّ حِزۡبَ ٱللَّهِ هُمُ ٱلۡغَٰلِبُونَ (56) يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا تَتَّخِذُواْ ٱلَّذِينَ ٱتَّخَذُواْ دِينَكُمۡ هُزُوٗا وَلَعِبٗا مِّنَ ٱلَّذِينَ أُوتُواْ ٱلۡكِتَٰبَ مِن قَبۡلِكُمۡ وَٱلۡكُفَّارَ أَوۡلِيَآءَۚ وَٱتَّقُواْ ٱللَّهَ إِن كُنتُم مُّؤۡمِنِينَ (57) وَإِذَا نَادَيۡتُمۡ إِلَى ٱلصَّلَوٰةِ ٱتَّخَذُوهَا هُزُوٗا وَلَعِبٗاۚ ذَٰلِكَ بِأَنَّهُمۡ قَوۡمٞ لَّا يَعۡقِلُونَ (58) قُلۡ يَٰٓأَهۡلَ ٱلۡكِتَٰبِ هَلۡ تَنقِمُونَ مِنَّآ إِلَّآ أَنۡ ءَامَنَّا بِٱللَّهِ وَمَآ أُنزِلَ إِلَيۡنَا وَمَآ أُنزِلَ مِن قَبۡلُ وَأَنَّ أَكۡثَرَكُمۡ فَٰسِقُونَ (59) قُلۡ هَلۡ أُنَبِّئُكُم بِشَرّٖ مِّن ذَٰلِكَ مَثُوبَةً عِندَ ٱللَّهِۚ مَن لَّعَنَهُ ٱللَّهُ وَغَضِبَ عَلَيۡهِ وَجَعَلَ مِنۡهُمُ ٱلۡقِرَدَةَ وَٱلۡخَنَازِيرَ وَعَبَدَ ٱلطَّٰغُوتَۚ أُوْلَٰٓئِكَ شَرّٞ مَّكَانٗا وَأَضَلُّ عَن سَوَآءِ ٱلسَّبِيلِ (60) وَإِذَا جَآءُوكُمۡ قَالُوٓاْ ءَامَنَّا وَقَد دَّخَلُواْ بِٱلۡكُفۡرِ وَهُمۡ قَدۡ خَرَجُواْ بِهِۦۚ وَٱللَّهُ أَعۡلَمُ بِمَا كَانُواْ يَكۡتُمُونَ (61) وَتَرَىٰ كَثِيرٗا مِّنۡهُمۡ يُسَٰرِعُونَ فِي ٱلۡإِثۡمِ وَٱلۡعُدۡوَٰنِ وَأَكۡلِهِمُ ٱلسُّحۡتَۚ لَبِئۡسَ مَا كَانُواْ يَعۡمَلُونَ (62) لَوۡلَا يَنۡهَىٰهُمُ ٱلرَّبَّٰنِيُّونَ وَٱلۡأَحۡبَارُ عَن قَوۡلِهِمُ ٱلۡإِثۡمَ وَأَكۡلِهِمُ ٱلسُّحۡتَۚ لَبِئۡسَ مَا كَانُواْ يَصۡنَعُونَ (63) وَقَالَتِ ٱلۡيَهُودُ يَدُ ٱللَّهِ مَغۡلُولَةٌۚ غُلَّتۡ أَيۡدِيهِمۡ وَلُعِنُواْ بِمَا قَالُواْۘ بَلۡ يَدَاهُ مَبۡسُوطَتَانِ يُنفِقُ كَيۡفَ يَشَآءُۚ وَلَيَزِيدَنَّ كَثِيرٗا مِّنۡهُم مَّآ أُنزِلَ إِلَيۡكَ مِن رَّبِّكَ طُغۡيَٰنٗا وَكُفۡرٗاۚ وَأَلۡقَيۡنَا بَيۡنَهُمُ ٱلۡعَدَٰوَةَ وَٱلۡبَغۡضَآءَ إِلَىٰ يَوۡمِ ٱلۡقِيَٰمَةِۚ كُلَّمَآ أَوۡقَدُواْ نَارٗا لِّلۡحَرۡبِ أَطۡفَأَهَا ٱللَّهُۚ وَيَسۡعَوۡنَ فِي ٱلۡأَرۡضِ فَسَادٗاۚ وَٱللَّهُ لَا يُحِبُّ ٱلۡمُفۡسِدِينَ (64) وَلَوۡ أَنَّ أَهۡلَ ٱلۡكِتَٰبِ ءَامَنُواْ وَٱتَّقَوۡاْ لَكَفَّرۡنَا عَنۡهُمۡ سَيِّـَٔاتِهِمۡ وَلَأَدۡخَلۡنَٰهُمۡ جَنَّٰتِ ٱلنَّعِيمِ (65) وَلَوۡ أَنَّهُمۡ أَقَامُواْ ٱلتَّوۡرَىٰةَ وَٱلۡإِنجِيلَ وَمَآ أُنزِلَ إِلَيۡهِم مِّن رَّبِّهِمۡ لَأَكَلُواْ مِن فَوۡقِهِمۡ وَمِن تَحۡتِ أَرۡجُلِهِمۚ مِّنۡهُمۡ أُمَّةٞ مُّقۡتَصِدَةٞۖ وَكَثِيرٞ مِّنۡهُمۡ سَآءَ مَا يَعۡمَلُونَ (66) ۞يَٰٓأَيُّهَا ٱلرَّسُولُ بَلِّغۡ مَآ أُنزِلَ إِلَيۡكَ مِن رَّبِّكَۖ وَإِن لَّمۡ تَفۡعَلۡ فَمَا بَلَّغۡتَ رِسَالَتَهُۥۚ وَٱللَّهُ يَعۡصِمُكَ مِنَ ٱلنَّاسِۗ إِنَّ ٱللَّهَ لَا يَهۡدِي ٱلۡقَوۡمَ ٱلۡكَٰفِرِينَ (67) قُلۡ يَٰٓأَهۡلَ ٱلۡكِتَٰبِ لَسۡتُمۡ عَلَىٰ شَيۡءٍ حَتَّىٰ تُقِيمُواْ ٱلتَّوۡرَىٰةَ وَٱلۡإِنجِيلَ وَمَآ أُنزِلَ إِلَيۡكُم مِّن رَّبِّكُمۡۗ وَلَيَزِيدَنَّ كَثِيرٗا مِّنۡهُم مَّآ أُنزِلَ إِلَيۡكَ مِن رَّبِّكَ طُغۡيَٰنٗا وَكُفۡرٗاۖ فَلَا تَأۡسَ عَلَى ٱلۡقَوۡمِ ٱلۡكَٰفِرِينَ (68) إِنَّ ٱلَّذِينَ ءَامَنُواْ وَٱلَّذِينَ هَادُواْ وَٱلصَّٰبِ‍ُٔونَ وَٱلنَّصَٰرَىٰ مَنۡ ءَامَنَ بِٱللَّهِ وَٱلۡيَوۡمِ ٱلۡأٓخِرِ وَعَمِلَ صَٰلِحٗا فَلَا خَوۡفٌ عَلَيۡهِمۡ وَلَا هُمۡ يَحۡزَنُونَ (69) لَقَدۡ أَخَذۡنَا مِيثَٰقَ بَنِيٓ إِسۡرَٰٓءِيلَ وَأَرۡسَلۡنَآ إِلَيۡهِمۡ رُسُلٗاۖ كُلَّمَا جَآءَهُمۡ رَسُولُۢ بِمَا لَا تَهۡوَىٰٓ أَنفُسُهُمۡ فَرِيقٗا كَذَّبُواْ وَفَرِيقٗا يَقۡتُلُونَ (70) وَحَسِبُوٓاْ أَلَّا تَكُونَ فِتۡنَةٞ فَعَمُواْ وَصَمُّواْ ثُمَّ تَابَ ٱللَّهُ عَلَيۡهِمۡ ثُمَّ عَمُواْ وَصَمُّواْ كَثِيرٞ مِّنۡهُمۡۚ وَٱللَّهُ بَصِيرُۢ بِمَا يَعۡمَلُونَ (71) لَقَدۡ كَفَرَ ٱلَّذِينَ قَالُوٓاْ إِنَّ ٱللَّهَ هُوَ ٱلۡمَسِيحُ ٱبۡنُ مَرۡيَمَۖ وَقَالَ ٱلۡمَسِيحُ يَٰبَنِيٓ إِسۡرَٰٓءِيلَ ٱعۡبُدُواْ ٱللَّهَ رَبِّي وَرَبَّكُمۡۖ إِنَّهُۥ مَن يُشۡرِكۡ بِٱللَّهِ فَقَدۡ حَرَّمَ ٱللَّهُ عَلَيۡهِ ٱلۡجَنَّةَ وَمَأۡوَىٰهُ ٱلنَّارُۖ وَمَا لِلظَّٰلِمِينَ مِنۡ أَنصَارٖ (72) لَّقَدۡ كَفَرَ ٱلَّذِينَ قَالُوٓاْ إِنَّ ٱللَّهَ ثَالِثُ ثَلَٰثَةٖۘ وَمَا مِنۡ إِلَٰهٍ إِلَّآ إِلَٰهٞ وَٰحِدٞۚ وَإِن لَّمۡ يَنتَهُواْ عَمَّا يَقُولُونَ لَيَمَسَّنَّ ٱلَّذِينَ كَفَرُواْ مِنۡهُمۡ عَذَابٌ أَلِيمٌ (73) أَفَلَا يَتُوبُونَ إِلَى ٱللَّهِ وَيَسۡتَغۡفِرُونَهُۥۚ وَٱللَّهُ غَفُورٞ رَّحِيمٞ (74) مَّا ٱلۡمَسِيحُ ٱبۡنُ مَرۡيَمَ إِلَّا رَسُولٞ قَدۡ خَلَتۡ مِن قَبۡلِهِ ٱلرُّسُلُ وَأُمُّهُۥ صِدِّيقَةٞۖ كَانَا يَأۡكُلَانِ ٱلطَّعَامَۗ ٱنظُرۡ كَيۡفَ نُبَيِّنُ لَهُمُ ٱلۡأٓيَٰتِ ثُمَّ ٱنظُرۡ أَنَّىٰ يُؤۡفَكُونَ (75) قُلۡ أَتَعۡبُدُونَ مِن دُونِ ٱللَّهِ مَا لَا يَمۡلِكُ لَكُمۡ ضَرّٗا وَلَا نَفۡعٗاۚ وَٱللَّهُ هُوَ ٱلسَّمِيعُ ٱلۡعَلِيمُ (76) قُلۡ يَٰٓأَهۡلَ ٱلۡكِتَٰبِ لَا تَغۡلُواْ فِي دِينِكُمۡ غَيۡرَ ٱلۡحَقِّ وَلَا تَتَّبِعُوٓاْ أَهۡوَآءَ قَوۡمٖ قَدۡ ضَلُّواْ مِن قَبۡلُ وَأَضَلُّواْ كَثِيرٗا وَضَلُّواْ عَن سَوَآءِ ٱلسَّبِيلِ (77) لُعِنَ ٱلَّذِينَ كَفَرُواْ مِنۢ بَنِيٓ إِسۡرَٰٓءِيلَ عَلَىٰ لِسَانِ دَاوُۥدَ وَعِيسَى ٱبۡنِ مَرۡيَمَۚ ذَٰلِكَ بِمَا عَصَواْ وَّكَانُواْ يَعۡتَدُونَ (78) كَانُواْ لَا يَتَنَاهَوۡنَ عَن مُّنكَرٖ فَعَلُوهُۚ لَبِئۡسَ مَا كَانُواْ يَفۡعَلُونَ (79) تَرَىٰ كَثِيرٗا مِّنۡهُمۡ يَتَوَلَّوۡنَ ٱلَّذِينَ كَفَرُواْۚ لَبِئۡسَ مَا قَدَّمَتۡ لَهُمۡ أَنفُسُهُمۡ أَن سَخِطَ ٱللَّهُ عَلَيۡهِمۡ وَفِي ٱلۡعَذَابِ هُمۡ خَٰلِدُونَ (80) وَلَوۡ كَانُواْ يُؤۡمِنُونَ بِٱللَّهِ وَٱلنَّبِيِّ وَمَآ أُنزِلَ إِلَيۡهِ مَا ٱتَّخَذُوهُمۡ أَوۡلِيَآءَ وَلَٰكِنَّ كَثِيرٗا مِّنۡهُمۡ فَٰسِقُونَ (81) ۞لَتَجِدَنَّ أَشَدَّ ٱلنَّاسِ عَدَٰوَةٗ لِّلَّذِينَ ءَامَنُواْ ٱلۡيَهُودَ وَٱلَّذِينَ أَشۡرَكُواْۖ وَلَتَجِدَنَّ أَقۡرَبَهُم مَّوَدَّةٗ لِّلَّذِينَ ءَامَنُواْ ٱلَّذِينَ قَالُوٓاْ إِنَّا نَصَٰرَىٰۚ ذَٰلِكَ بِأَنَّ مِنۡهُمۡ قِسِّيسِينَ وَرُهۡبَانٗا وَأَنَّهُمۡ لَا يَسۡتَكۡبِرُونَ (82) وَإِذَا سَمِعُواْ مَآ أُنزِلَ إِلَى ٱلرَّسُولِ تَرَىٰٓ أَعۡيُنَهُمۡ تَفِيضُ مِنَ ٱلدَّمۡعِ مِمَّا عَرَفُواْ مِنَ ٱلۡحَقِّۖ يَقُولُونَ رَبَّنَآ ءَامَنَّا فَٱكۡتُبۡنَا مَعَ ٱلشَّٰهِدِينَ (83) وَمَا لَنَا لَا نُؤۡمِنُ بِٱللَّهِ وَمَا جَآءَنَا مِنَ ٱلۡحَقِّ وَنَطۡمَعُ أَن يُدۡخِلَنَا رَبُّنَا مَعَ ٱلۡقَوۡمِ ٱلصَّٰلِحِينَ (84) فَأَثَٰبَهُمُ ٱللَّهُ بِمَا قَالُواْ جَنَّٰتٖ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُ خَٰلِدِينَ فِيهَاۚ وَذَٰلِكَ جَزَآءُ ٱلۡمُحۡسِنِينَ (85) وَٱلَّذِينَ كَفَرُواْ وَكَذَّبُواْ بِـَٔايَٰتِنَآ أُوْلَٰٓئِكَ أَصۡحَٰبُ ٱلۡجَحِيمِ (86) يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا تُحَرِّمُواْ طَيِّبَٰتِ مَآ أَحَلَّ ٱللَّهُ لَكُمۡ وَلَا تَعۡتَدُوٓاْۚ إِنَّ ٱللَّهَ لَا يُحِبُّ ٱلۡمُعۡتَدِينَ (87) وَكُلُواْ مِمَّا رَزَقَكُمُ ٱللَّهُ حَلَٰلٗا طَيِّبٗاۚ وَٱتَّقُواْ ٱللَّهَ ٱلَّذِيٓ أَنتُم بِهِۦ مُؤۡمِنُونَ (88) لَا يُؤَاخِذُكُمُ ٱللَّهُ بِٱللَّغۡوِ فِيٓ أَيۡمَٰنِكُمۡ وَلَٰكِن يُؤَاخِذُكُم بِمَا عَقَّدتُّمُ ٱلۡأَيۡمَٰنَۖ فَكَفَّٰرَتُهُۥٓ إِطۡعَامُ عَشَرَةِ مَسَٰكِينَ مِنۡ أَوۡسَطِ مَا تُطۡعِمُونَ أَهۡلِيكُمۡ أَوۡ كِسۡوَتُهُمۡ أَوۡ تَحۡرِيرُ رَقَبَةٖۖ فَمَن لَّمۡ يَجِدۡ فَصِيَامُ ثَلَٰثَةِ أَيَّامٖۚ ذَٰلِكَ كَفَّٰرَةُ أَيۡمَٰنِكُمۡ إِذَا حَلَفۡتُمۡۚ وَٱحۡفَظُوٓاْ أَيۡمَٰنَكُمۡۚ كَذَٰلِكَ يُبَيِّنُ ٱللَّهُ لَكُمۡ ءَايَٰتِهِۦ لَعَلَّكُمۡ تَشۡكُرُونَ (89) يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓاْ إِنَّمَا ٱلۡخَمۡرُ وَٱلۡمَيۡسِرُ وَٱلۡأَنصَابُ وَٱلۡأَزۡلَٰمُ رِجۡسٞ مِّنۡ عَمَلِ ٱلشَّيۡطَٰنِ فَٱجۡتَنِبُوهُ لَعَلَّكُمۡ تُفۡلِحُونَ (90) إِنَّمَا يُرِيدُ ٱلشَّيۡطَٰنُ أَن يُوقِعَ بَيۡنَكُمُ ٱلۡعَدَٰوَةَ وَٱلۡبَغۡضَآءَ فِي ٱلۡخَمۡرِ وَٱلۡمَيۡسِرِ وَيَصُدَّكُمۡ عَن ذِكۡرِ ٱللَّهِ وَعَنِ ٱلصَّلَوٰةِۖ فَهَلۡ أَنتُم مُّنتَهُونَ (91) وَأَطِيعُواْ ٱللَّهَ وَأَطِيعُواْ ٱلرَّسُولَ وَٱحۡذَرُواْۚ فَإِن تَوَلَّيۡتُمۡ فَٱعۡلَمُوٓاْ أَنَّمَا عَلَىٰ رَسُولِنَا ٱلۡبَلَٰغُ ٱلۡمُبِينُ (92) لَيۡسَ عَلَى ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ جُنَاحٞ فِيمَا طَعِمُوٓاْ إِذَا مَا ٱتَّقَواْ وَّءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ ثُمَّ ٱتَّقَواْ وَّءَامَنُواْ ثُمَّ ٱتَّقَواْ وَّأَحۡسَنُواْۚ وَٱللَّهُ يُحِبُّ ٱلۡمُحۡسِنِينَ (93) يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَيَبۡلُوَنَّكُمُ ٱللَّهُ بِشَيۡءٖ مِّنَ ٱلصَّيۡدِ تَنَالُهُۥٓ أَيۡدِيكُمۡ وَرِمَاحُكُمۡ لِيَعۡلَمَ ٱللَّهُ مَن يَخَافُهُۥ بِٱلۡغَيۡبِۚ فَمَنِ ٱعۡتَدَىٰ بَعۡدَ ذَٰلِكَ فَلَهُۥ عَذَابٌ أَلِيمٞ (94) يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا تَقۡتُلُواْ ٱلصَّيۡدَ وَأَنتُمۡ حُرُمٞۚ وَمَن قَتَلَهُۥ مِنكُم مُّتَعَمِّدٗا فَجَزَآءٞ مِّثۡلُ مَا قَتَلَ مِنَ ٱلنَّعَمِ يَحۡكُمُ بِهِۦ ذَوَا عَدۡلٖ مِّنكُمۡ هَدۡيَۢا بَٰلِغَ ٱلۡكَعۡبَةِ أَوۡ كَفَّٰرَةٞ طَعَامُ مَسَٰكِينَ أَوۡ عَدۡلُ ذَٰلِكَ صِيَامٗا لِّيَذُوقَ وَبَالَ أَمۡرِهِۦۗ عَفَا ٱللَّهُ عَمَّا سَلَفَۚ وَمَنۡ عَادَ فَيَنتَقِمُ ٱللَّهُ مِنۡهُۚ وَٱللَّهُ عَزِيزٞ ذُو ٱنتِقَامٍ (95) أُحِلَّ لَكُمۡ صَيۡدُ ٱلۡبَحۡرِ وَطَعَامُهُۥ مَتَٰعٗا لَّكُمۡ وَلِلسَّيَّارَةِۖ وَحُرِّمَ عَلَيۡكُمۡ صَيۡدُ ٱلۡبَرِّ مَا دُمۡتُمۡ حُرُمٗاۗ وَٱتَّقُواْ ٱللَّهَ ٱلَّذِيٓ إِلَيۡهِ تُحۡشَرُونَ (96) ۞جَعَلَ ٱللَّهُ ٱلۡكَعۡبَةَ ٱلۡبَيۡتَ ٱلۡحَرَامَ قِيَٰمٗا لِّلنَّاسِ وَٱلشَّهۡرَ ٱلۡحَرَامَ وَٱلۡهَدۡيَ وَٱلۡقَلَٰٓئِدَۚ ذَٰلِكَ لِتَعۡلَمُوٓاْ أَنَّ ٱللَّهَ يَعۡلَمُ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِ وَأَنَّ ٱللَّهَ بِكُلِّ شَيۡءٍ عَلِيمٌ (97) ٱعۡلَمُوٓاْ أَنَّ ٱللَّهَ شَدِيدُ ٱلۡعِقَابِ وَأَنَّ ٱللَّهَ غَفُورٞ رَّحِيمٞ (98) مَّا عَلَى ٱلرَّسُولِ إِلَّا ٱلۡبَلَٰغُۗ وَٱللَّهُ يَعۡلَمُ مَا تُبۡدُونَ وَمَا تَكۡتُمُونَ (99) قُل لَّا يَسۡتَوِي ٱلۡخَبِيثُ وَٱلطَّيِّبُ وَلَوۡ أَعۡجَبَكَ كَثۡرَةُ ٱلۡخَبِيثِۚ فَٱتَّقُواْ ٱللَّهَ يَٰٓأُوْلِي ٱلۡأَلۡبَٰبِ لَعَلَّكُمۡ تُفۡلِحُونَ (100) يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا تَسۡـَٔلُواْ عَنۡ أَشۡيَآءَ إِن تُبۡدَ لَكُمۡ تَسُؤۡكُمۡ وَإِن تَسۡـَٔلُواْ عَنۡهَا حِينَ يُنَزَّلُ ٱلۡقُرۡءَانُ تُبۡدَ لَكُمۡ عَفَا ٱللَّهُ عَنۡهَاۗ وَٱللَّهُ غَفُورٌ حَلِيمٞ (101) قَدۡ سَأَلَهَا قَوۡمٞ مِّن قَبۡلِكُمۡ ثُمَّ أَصۡبَحُواْ بِهَا كَٰفِرِينَ (102) مَا جَعَلَ ٱللَّهُ مِنۢ بَحِيرَةٖ وَلَا سَآئِبَةٖ وَلَا وَصِيلَةٖ وَلَا حَامٖ وَلَٰكِنَّ ٱلَّذِينَ كَفَرُواْ يَفۡتَرُونَ عَلَى ٱللَّهِ ٱلۡكَذِبَۖ وَأَكۡثَرُهُمۡ لَا يَعۡقِلُونَ (103) وَإِذَا قِيلَ لَهُمۡ تَعَالَوۡاْ إِلَىٰ مَآ أَنزَلَ ٱللَّهُ وَإِلَى ٱلرَّسُولِ قَالُواْ حَسۡبُنَا مَا وَجَدۡنَا عَلَيۡهِ ءَابَآءَنَآۚ أَوَلَوۡ كَانَ ءَابَآؤُهُمۡ لَا يَعۡلَمُونَ شَيۡـٔٗا وَلَا يَهۡتَدُونَ (104) يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ عَلَيۡكُمۡ أَنفُسَكُمۡۖ لَا يَضُرُّكُم مَّن ضَلَّ إِذَا ٱهۡتَدَيۡتُمۡۚ إِلَى ٱللَّهِ مَرۡجِعُكُمۡ جَمِيعٗا فَيُنَبِّئُكُم بِمَا كُنتُمۡ تَعۡمَلُونَ (105) يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ شَهَٰدَةُ بَيۡنِكُمۡ إِذَا حَضَرَ أَحَدَكُمُ ٱلۡمَوۡتُ حِينَ ٱلۡوَصِيَّةِ ٱثۡنَانِ ذَوَا عَدۡلٖ مِّنكُمۡ أَوۡ ءَاخَرَانِ مِنۡ غَيۡرِكُمۡ إِنۡ أَنتُمۡ ضَرَبۡتُمۡ فِي ٱلۡأَرۡضِ فَأَصَٰبَتۡكُم مُّصِيبَةُ ٱلۡمَوۡتِۚ تَحۡبِسُونَهُمَا مِنۢ بَعۡدِ ٱلصَّلَوٰةِ فَيُقۡسِمَانِ بِٱللَّهِ إِنِ ٱرۡتَبۡتُمۡ لَا نَشۡتَرِي بِهِۦ ثَمَنٗا وَلَوۡ كَانَ ذَا قُرۡبَىٰ وَلَا نَكۡتُمُ شَهَٰدَةَ ٱللَّهِ إِنَّآ إِذٗا لَّمِنَ ٱلۡأٓثِمِينَ (106) فَإِنۡ عُثِرَ عَلَىٰٓ أَنَّهُمَا ٱسۡتَحَقَّآ إِثۡمٗا فَـَٔاخَرَانِ يَقُومَانِ مَقَامَهُمَا مِنَ ٱلَّذِينَ ٱسۡتَحَقَّ عَلَيۡهِمُ ٱلۡأَوۡلَيَٰنِ فَيُقۡسِمَانِ بِٱللَّهِ لَشَهَٰدَتُنَآ أَحَقُّ مِن شَهَٰدَتِهِمَا وَمَا ٱعۡتَدَيۡنَآ إِنَّآ إِذٗا لَّمِنَ ٱلظَّٰلِمِينَ (107) ذَٰلِكَ أَدۡنَىٰٓ أَن يَأۡتُواْ بِٱلشَّهَٰدَةِ عَلَىٰ وَجۡهِهَآ أَوۡ يَخَافُوٓاْ أَن تُرَدَّ أَيۡمَٰنُۢ بَعۡدَ أَيۡمَٰنِهِمۡۗ وَٱتَّقُواْ ٱللَّهَ وَٱسۡمَعُواْۗ وَٱللَّهُ لَا يَهۡدِي ٱلۡقَوۡمَ ٱلۡفَٰسِقِينَ (108) ۞يَوۡمَ يَجۡمَعُ ٱللَّهُ ٱلرُّسُلَ فَيَقُولُ مَاذَآ أُجِبۡتُمۡۖ قَالُواْ لَا عِلۡمَ لَنَآۖ إِنَّكَ أَنتَ عَلَّٰمُ ٱلۡغُيُوبِ (109) إِذۡ قَالَ ٱللَّهُ يَٰعِيسَى ٱبۡنَ مَرۡيَمَ ٱذۡكُرۡ نِعۡمَتِي عَلَيۡكَ وَعَلَىٰ وَٰلِدَتِكَ إِذۡ أَيَّدتُّكَ بِرُوحِ ٱلۡقُدُسِ تُكَلِّمُ ٱلنَّاسَ فِي ٱلۡمَهۡدِ وَكَهۡلٗاۖ وَإِذۡ عَلَّمۡتُكَ ٱلۡكِتَٰبَ وَٱلۡحِكۡمَةَ وَٱلتَّوۡرَىٰةَ وَٱلۡإِنجِيلَۖ وَإِذۡ تَخۡلُقُ مِنَ ٱلطِّينِ كَهَيۡـَٔةِ ٱلطَّيۡرِ بِإِذۡنِي فَتَنفُخُ فِيهَا فَتَكُونُ طَيۡرَۢا بِإِذۡنِيۖ وَتُبۡرِئُ ٱلۡأَكۡمَهَ وَٱلۡأَبۡرَصَ بِإِذۡنِيۖ وَإِذۡ تُخۡرِجُ ٱلۡمَوۡتَىٰ بِإِذۡنِيۖ وَإِذۡ كَفَفۡتُ بَنِيٓ إِسۡرَٰٓءِيلَ عَنكَ إِذۡ جِئۡتَهُم بِٱلۡبَيِّنَٰتِ فَقَالَ ٱلَّذِينَ كَفَرُواْ مِنۡهُمۡ إِنۡ هَٰذَآ إِلَّا سِحۡرٞ مُّبِينٞ (110) وَإِذۡ أَوۡحَيۡتُ إِلَى ٱلۡحَوَارِيِّـۧنَ أَنۡ ءَامِنُواْ بِي وَبِرَسُولِي قَالُوٓاْ ءَامَنَّا وَٱشۡهَدۡ بِأَنَّنَا مُسۡلِمُونَ (111) إِذۡ قَالَ ٱلۡحَوَارِيُّونَ يَٰعِيسَى ٱبۡنَ مَرۡيَمَ هَلۡ يَسۡتَطِيعُ رَبُّكَ أَن يُنَزِّلَ عَلَيۡنَا مَآئِدَةٗ مِّنَ ٱلسَّمَآءِۖ قَالَ ٱتَّقُواْ ٱللَّهَ إِن كُنتُم مُّؤۡمِنِينَ (112) قَالُواْ نُرِيدُ أَن نَّأۡكُلَ مِنۡهَا وَتَطۡمَئِنَّ قُلُوبُنَا وَنَعۡلَمَ أَن قَدۡ صَدَقۡتَنَا وَنَكُونَ عَلَيۡهَا مِنَ ٱلشَّٰهِدِينَ (113) قَالَ عِيسَى ٱبۡنُ مَرۡيَمَ ٱللَّهُمَّ رَبَّنَآ أَنزِلۡ عَلَيۡنَا مَآئِدَةٗ مِّنَ ٱلسَّمَآءِ تَكُونُ لَنَا عِيدٗا لِّأَوَّلِنَا وَءَاخِرِنَا وَءَايَةٗ مِّنكَۖ وَٱرۡزُقۡنَا وَأَنتَ خَيۡرُ ٱلرَّٰزِقِينَ (114) قَالَ ٱللَّهُ إِنِّي مُنَزِّلُهَا عَلَيۡكُمۡۖ فَمَن يَكۡفُرۡ بَعۡدُ مِنكُمۡ فَإِنِّيٓ أُعَذِّبُهُۥ عَذَابٗا لَّآ أُعَذِّبُهُۥٓ أَحَدٗا مِّنَ ٱلۡعَٰلَمِينَ (115) وَإِذۡ قَالَ ٱللَّهُ يَٰعِيسَى ٱبۡنَ مَرۡيَمَ ءَأَنتَ قُلۡتَ لِلنَّاسِ ٱتَّخِذُونِي وَأُمِّيَ إِلَٰهَيۡنِ مِن دُونِ ٱللَّهِۖ قَالَ سُبۡحَٰنَكَ مَا يَكُونُ لِيٓ أَنۡ أَقُولَ مَا لَيۡسَ لِي بِحَقٍّۚ إِن كُنتُ قُلۡتُهُۥ فَقَدۡ عَلِمۡتَهُۥۚ تَعۡلَمُ مَا فِي نَفۡسِي وَلَآ أَعۡلَمُ مَا فِي نَفۡسِكَۚ إِنَّكَ أَنتَ عَلَّٰمُ ٱلۡغُيُوبِ (116) مَا قُلۡتُ لَهُمۡ إِلَّا مَآ أَمَرۡتَنِي بِهِۦٓ أَنِ ٱعۡبُدُواْ ٱللَّهَ رَبِّي وَرَبَّكُمۡۚ وَكُنتُ عَلَيۡهِمۡ شَهِيدٗا مَّا دُمۡتُ فِيهِمۡۖ فَلَمَّا تَوَفَّيۡتَنِي كُنتَ أَنتَ ٱلرَّقِيبَ عَلَيۡهِمۡۚ وَأَنتَ عَلَىٰ كُلِّ شَيۡءٖ شَهِيدٌ (117) إِن تُعَذِّبۡهُمۡ فَإِنَّهُمۡ عِبَادُكَۖ وَإِن تَغۡفِرۡ لَهُمۡ فَإِنَّكَ أَنتَ ٱلۡعَزِيزُ ٱلۡحَكِيمُ (118) قَالَ ٱللَّهُ هَٰذَا يَوۡمُ يَنفَعُ ٱلصَّٰدِقِينَ صِدۡقُهُمۡۚ لَهُمۡ جَنَّٰتٞ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُ خَٰلِدِينَ فِيهَآ أَبَدٗاۖ رَّضِيَ ٱللَّهُ عَنۡهُمۡ وَرَضُواْ عَنۡهُۚ ذَٰلِكَ ٱلۡفَوۡزُ ٱلۡعَظِيمُ (119) لِلَّهِ مُلۡكُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَمَا فِيهِنَّۚ وَهُوَ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرُۢ (120)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default Five;