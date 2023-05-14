import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const Fourteen = () => {
  return (
    <div>
      <Helmet>
        <title>014 - سورة إبراهيم</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة إبراهيم</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          الٓرۚ كِتَٰبٌ أَنزَلۡنَٰهُ إِلَيۡكَ لِتُخۡرِجَ ٱلنَّاسَ مِنَ
          ٱلظُّلُمَٰتِ إِلَى ٱلنُّورِ بِإِذۡنِ رَبِّهِمۡ إِلَىٰ صِرَٰطِ
          ٱلۡعَزِيزِ ٱلۡحَمِيدِ (1) ٱللَّهِ ٱلَّذِي لَهُۥ مَا فِي ٱلسَّمَٰوَٰتِ
          وَمَا فِي ٱلۡأَرۡضِۗ وَوَيۡلٞ لِّلۡكَٰفِرِينَ مِنۡ عَذَابٖ شَدِيدٍ (2)
          ٱلَّذِينَ يَسۡتَحِبُّونَ ٱلۡحَيَوٰةَ ٱلدُّنۡيَا عَلَى ٱلۡأٓخِرَةِ
          وَيَصُدُّونَ عَن سَبِيلِ ٱللَّهِ وَيَبۡغُونَهَا عِوَجًاۚ أُوْلَٰٓئِكَ
          فِي ضَلَٰلِۭ بَعِيدٖ (3) وَمَآ أَرۡسَلۡنَا مِن رَّسُولٍ إِلَّا
          بِلِسَانِ قَوۡمِهِۦ لِيُبَيِّنَ لَهُمۡۖ فَيُضِلُّ ٱللَّهُ مَن يَشَآءُ
          وَيَهۡدِي مَن يَشَآءُۚ وَهُوَ ٱلۡعَزِيزُ ٱلۡحَكِيمُ (4) وَلَقَدۡ
          أَرۡسَلۡنَا مُوسَىٰ بِـَٔايَٰتِنَآ أَنۡ أَخۡرِجۡ قَوۡمَكَ مِنَ
          ٱلظُّلُمَٰتِ إِلَى ٱلنُّورِ وَذَكِّرۡهُم بِأَيَّىٰمِ ٱللَّهِۚ إِنَّ
          فِي ذَٰلِكَ لَأٓيَٰتٖ لِّكُلِّ صَبَّارٖ شَكُورٖ (5) وَإِذۡ قَالَ
          مُوسَىٰ لِقَوۡمِهِ ٱذۡكُرُواْ نِعۡمَةَ ٱللَّهِ عَلَيۡكُمۡ إِذۡ
          أَنجَىٰكُم مِّنۡ ءَالِ فِرۡعَوۡنَ يَسُومُونَكُمۡ سُوٓءَ ٱلۡعَذَابِ
          وَيُذَبِّحُونَ أَبۡنَآءَكُمۡ وَيَسۡتَحۡيُونَ نِسَآءَكُمۡۚ وَفِي
          ذَٰلِكُم بَلَآءٞ مِّن رَّبِّكُمۡ عَظِيمٞ (6) وَإِذۡ تَأَذَّنَ
          رَبُّكُمۡ لَئِن شَكَرۡتُمۡ لَأَزِيدَنَّكُمۡۖ وَلَئِن كَفَرۡتُمۡ إِنَّ
          عَذَابِي لَشَدِيدٞ (7) وَقَالَ مُوسَىٰٓ إِن تَكۡفُرُوٓاْ أَنتُمۡ وَمَن
          فِي ٱلۡأَرۡضِ جَمِيعٗا فَإِنَّ ٱللَّهَ لَغَنِيٌّ حَمِيدٌ (8) أَلَمۡ
          يَأۡتِكُمۡ نَبَؤُاْ ٱلَّذِينَ مِن قَبۡلِكُمۡ قَوۡمِ نُوحٖ وَعَادٖ
          وَثَمُودَ وَٱلَّذِينَ مِنۢ بَعۡدِهِمۡ لَا يَعۡلَمُهُمۡ إِلَّا ٱللَّهُۚ
          جَآءَتۡهُمۡ رُسُلُهُم بِٱلۡبَيِّنَٰتِ فَرَدُّوٓاْ أَيۡدِيَهُمۡ فِيٓ
          أَفۡوَٰهِهِمۡ وَقَالُوٓاْ إِنَّا كَفَرۡنَا بِمَآ أُرۡسِلۡتُم بِهِۦ
          وَإِنَّا لَفِي شَكّٖ مِّمَّا تَدۡعُونَنَآ إِلَيۡهِ مُرِيبٖ (9)
          ۞قَالَتۡ رُسُلُهُمۡ أَفِي ٱللَّهِ شَكّٞ فَاطِرِ ٱلسَّمَٰوَٰتِ
          وَٱلۡأَرۡضِۖ يَدۡعُوكُمۡ لِيَغۡفِرَ لَكُم مِّن ذُنُوبِكُمۡ
          وَيُؤَخِّرَكُمۡ إِلَىٰٓ أَجَلٖ مُّسَمّٗىۚ قَالُوٓاْ إِنۡ أَنتُمۡ
          إِلَّا بَشَرٞ مِّثۡلُنَا تُرِيدُونَ أَن تَصُدُّونَا عَمَّا كَانَ
          يَعۡبُدُ ءَابَآؤُنَا فَأۡتُونَا بِسُلۡطَٰنٖ مُّبِينٖ (10) قَالَتۡ
          لَهُمۡ رُسُلُهُمۡ إِن نَّحۡنُ إِلَّا بَشَرٞ مِّثۡلُكُمۡ وَلَٰكِنَّ
          ٱللَّهَ يَمُنُّ عَلَىٰ مَن يَشَآءُ مِنۡ عِبَادِهِۦۖ وَمَا كَانَ
          لَنَآ أَن نَّأۡتِيَكُم بِسُلۡطَٰنٍ إِلَّا بِإِذۡنِ ٱللَّهِۚ وَعَلَى
          ٱللَّهِ فَلۡيَتَوَكَّلِ ٱلۡمُؤۡمِنُونَ (11) وَمَا لَنَآ أَلَّا
          نَتَوَكَّلَ عَلَى ٱللَّهِ وَقَدۡ هَدَىٰنَا سُبُلَنَاۚ وَلَنَصۡبِرَنَّ
          عَلَىٰ مَآ ءَاذَيۡتُمُونَاۚ وَعَلَى ٱللَّهِ فَلۡيَتَوَكَّلِ
          ٱلۡمُتَوَكِّلُونَ (12) وَقَالَ ٱلَّذِينَ كَفَرُواْ لِرُسُلِهِمۡ
          لَنُخۡرِجَنَّكُم مِّنۡ أَرۡضِنَآ أَوۡ لَتَعُودُنَّ فِي مِلَّتِنَاۖ
          فَأَوۡحَىٰٓ إِلَيۡهِمۡ رَبُّهُمۡ لَنُهۡلِكَنَّ ٱلظَّٰلِمِينَ (13)
          وَلَنُسۡكِنَنَّكُمُ ٱلۡأَرۡضَ مِنۢ بَعۡدِهِمۡۚ ذَٰلِكَ لِمَنۡ خَافَ
          مَقَامِي وَخَافَ وَعِيدِ (14) وَٱسۡتَفۡتَحُواْ وَخَابَ كُلُّ جَبَّارٍ
          عَنِيدٖ (15) مِّن وَرَآئِهِۦ جَهَنَّمُ وَيُسۡقَىٰ مِن مَّآءٖ صَدِيدٖ
          (16) يَتَجَرَّعُهُۥ وَلَا يَكَادُ يُسِيغُهُۥ وَيَأۡتِيهِ ٱلۡمَوۡتُ مِن
          كُلِّ مَكَانٖ وَمَا هُوَ بِمَيِّتٖۖ وَمِن وَرَآئِهِۦ عَذَابٌ غَلِيظٞ
          (17) مَّثَلُ ٱلَّذِينَ كَفَرُواْ بِرَبِّهِمۡۖ أَعۡمَٰلُهُمۡ كَرَمَادٍ
          ٱشۡتَدَّتۡ بِهِ ٱلرِّيحُ فِي يَوۡمٍ عَاصِفٖۖ لَّا يَقۡدِرُونَ مِمَّا
          كَسَبُواْ عَلَىٰ شَيۡءٖۚ ذَٰلِكَ هُوَ ٱلضَّلَٰلُ ٱلۡبَعِيدُ (18)
          أَلَمۡ تَرَ أَنَّ ٱللَّهَ خَلَقَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ بِٱلۡحَقِّۚ
          إِن يَشَأۡ يُذۡهِبۡكُمۡ وَيَأۡتِ بِخَلۡقٖ جَدِيدٖ (19) وَمَا ذَٰلِكَ
          عَلَى ٱللَّهِ بِعَزِيزٖ (20) وَبَرَزُواْ لِلَّهِ جَمِيعٗا فَقَالَ
          ٱلضُّعَفَٰٓؤُاْ لِلَّذِينَ ٱسۡتَكۡبَرُوٓاْ إِنَّا كُنَّا لَكُمۡ
          تَبَعٗا فَهَلۡ أَنتُم مُّغۡنُونَ عَنَّا مِنۡ عَذَابِ ٱللَّهِ مِن
          شَيۡءٖۚ قَالُواْ لَوۡ هَدَىٰنَا ٱللَّهُ لَهَدَيۡنَٰكُمۡۖ سَوَآءٌ
          عَلَيۡنَآ أَجَزِعۡنَآ أَمۡ صَبَرۡنَا مَا لَنَا مِن مَّحِيصٖ (21)
          وَقَالَ ٱلشَّيۡطَٰنُ لَمَّا قُضِيَ ٱلۡأَمۡرُ إِنَّ ٱللَّهَ وَعَدَكُمۡ
          وَعۡدَ ٱلۡحَقِّ وَوَعَدتُّكُمۡ فَأَخۡلَفۡتُكُمۡۖ وَمَا كَانَ لِيَ
          عَلَيۡكُم مِّن سُلۡطَٰنٍ إِلَّآ أَن دَعَوۡتُكُمۡ فَٱسۡتَجَبۡتُمۡ لِيۖ
          فَلَا تَلُومُونِي وَلُومُوٓاْ أَنفُسَكُمۖ مَّآ أَنَا۠ بِمُصۡرِخِكُمۡ
          وَمَآ أَنتُم بِمُصۡرِخِيَّ إِنِّي كَفَرۡتُ بِمَآ أَشۡرَكۡتُمُونِ مِن
          قَبۡلُۗ إِنَّ ٱلظَّٰلِمِينَ لَهُمۡ عَذَابٌ أَلِيمٞ (22) وَأُدۡخِلَ
          ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ جَنَّٰتٖ تَجۡرِي مِن
          تَحۡتِهَا ٱلۡأَنۡهَٰرُ خَٰلِدِينَ فِيهَا بِإِذۡنِ رَبِّهِمۡۖ
          تَحِيَّتُهُمۡ فِيهَا سَلَٰمٌ (23) أَلَمۡ تَرَ كَيۡفَ ضَرَبَ ٱللَّهُ
          مَثَلٗا كَلِمَةٗ طَيِّبَةٗ كَشَجَرَةٖ طَيِّبَةٍ أَصۡلُهَا ثَابِتٞ
          وَفَرۡعُهَا فِي ٱلسَّمَآءِ (24) تُؤۡتِيٓ أُكُلَهَا كُلَّ حِينِۭ
          بِإِذۡنِ رَبِّهَاۗ وَيَضۡرِبُ ٱللَّهُ ٱلۡأَمۡثَالَ لِلنَّاسِ
          لَعَلَّهُمۡ يَتَذَكَّرُونَ (25) وَمَثَلُ كَلِمَةٍ خَبِيثَةٖ كَشَجَرَةٍ
          خَبِيثَةٍ ٱجۡتُثَّتۡ مِن فَوۡقِ ٱلۡأَرۡضِ مَا لَهَا مِن قَرَارٖ (26)
          يُثَبِّتُ ٱللَّهُ ٱلَّذِينَ ءَامَنُواْ بِٱلۡقَوۡلِ ٱلثَّابِتِ فِي
          ٱلۡحَيَوٰةِ ٱلدُّنۡيَا وَفِي ٱلۡأٓخِرَةِۖ وَيُضِلُّ ٱللَّهُ
          ٱلظَّٰلِمِينَۚ وَيَفۡعَلُ ٱللَّهُ مَا يَشَآءُ (27) ۞أَلَمۡ تَرَ إِلَى
          ٱلَّذِينَ بَدَّلُواْ نِعۡمَتَ ٱللَّهِ كُفۡرٗا وَأَحَلُّواْ قَوۡمَهُمۡ
          دَارَ ٱلۡبَوَارِ (28) جَهَنَّمَ يَصۡلَوۡنَهَاۖ وَبِئۡسَ ٱلۡقَرَارُ
          (29) وَجَعَلُواْ لِلَّهِ أَندَادٗا لِّيُضِلُّواْ عَن سَبِيلِهِۦۗ قُلۡ
          تَمَتَّعُواْ فَإِنَّ مَصِيرَكُمۡ إِلَى ٱلنَّارِ (30) قُل لِّعِبَادِيَ
          ٱلَّذِينَ ءَامَنُواْ يُقِيمُواْ ٱلصَّلَوٰةَ وَيُنفِقُواْ مِمَّا
          رَزَقۡنَٰهُمۡ سِرّٗا وَعَلَانِيَةٗ مِّن قَبۡلِ أَن يَأۡتِيَ يَوۡمٞ
          لَّا بَيۡعٞ فِيهِ وَلَا خِلَٰلٌ (31) ٱللَّهُ ٱلَّذِي خَلَقَ
          ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ وَأَنزَلَ مِنَ ٱلسَّمَآءِ مَآءٗ فَأَخۡرَجَ
          بِهِۦ مِنَ ٱلثَّمَرَٰتِ رِزۡقٗا لَّكُمۡۖ وَسَخَّرَ لَكُمُ ٱلۡفُلۡكَ
          لِتَجۡرِيَ فِي ٱلۡبَحۡرِ بِأَمۡرِهِۦۖ وَسَخَّرَ لَكُمُ ٱلۡأَنۡهَٰرَ
          (32) وَسَخَّرَ لَكُمُ ٱلشَّمۡسَ وَٱلۡقَمَرَ دَآئِبَيۡنِۖ وَسَخَّرَ
          لَكُمُ ٱلَّيۡلَ وَٱلنَّهَارَ (33) وَءَاتَىٰكُم مِّن كُلِّ مَا
          سَأَلۡتُمُوهُۚ وَإِن تَعُدُّواْ نِعۡمَتَ ٱللَّهِ لَا تُحۡصُوهَآۗ
          إِنَّ ٱلۡإِنسَٰنَ لَظَلُومٞ كَفَّارٞ (34) وَإِذۡ قَالَ إِبۡرَٰهِيمُ
          رَبِّ ٱجۡعَلۡ هَٰذَا ٱلۡبَلَدَ ءَامِنٗا وَٱجۡنُبۡنِي وَبَنِيَّ أَن
          نَّعۡبُدَ ٱلۡأَصۡنَامَ (35) رَبِّ إِنَّهُنَّ أَضۡلَلۡنَ كَثِيرٗا مِّنَ
          ٱلنَّاسِۖ فَمَن تَبِعَنِي فَإِنَّهُۥ مِنِّيۖ وَمَنۡ عَصَانِي فَإِنَّكَ
          غَفُورٞ رَّحِيمٞ (36) رَّبَّنَآ إِنِّيٓ أَسۡكَنتُ مِن ذُرِّيَّتِي
          بِوَادٍ غَيۡرِ ذِي زَرۡعٍ عِندَ بَيۡتِكَ ٱلۡمُحَرَّمِ رَبَّنَا
          لِيُقِيمُواْ ٱلصَّلَوٰةَ فَٱجۡعَلۡ أَفۡـِٔدَةٗ مِّنَ ٱلنَّاسِ تَهۡوِيٓ
          إِلَيۡهِمۡ وَٱرۡزُقۡهُم مِّنَ ٱلثَّمَرَٰتِ لَعَلَّهُمۡ يَشۡكُرُونَ
          (37) رَبَّنَآ إِنَّكَ تَعۡلَمُ مَا نُخۡفِي وَمَا نُعۡلِنُۗ وَمَا
          يَخۡفَىٰ عَلَى ٱللَّهِ مِن شَيۡءٖ فِي ٱلۡأَرۡضِ وَلَا فِي ٱلسَّمَآءِ
          (38) ٱلۡحَمۡدُ لِلَّهِ ٱلَّذِي وَهَبَ لِي عَلَى ٱلۡكِبَرِ إِسۡمَٰعِيلَ
          وَإِسۡحَٰقَۚ إِنَّ رَبِّي لَسَمِيعُ ٱلدُّعَآءِ (39) رَبِّ ٱجۡعَلۡنِي
          مُقِيمَ ٱلصَّلَوٰةِ وَمِن ذُرِّيَّتِيۚ رَبَّنَا وَتَقَبَّلۡ دُعَآءِ
          (40) رَبَّنَا ٱغۡفِرۡ لِي وَلِوَٰلِدَيَّ وَلِلۡمُؤۡمِنِينَ يَوۡمَ
          يَقُومُ ٱلۡحِسَابُ (41) وَلَا تَحۡسَبَنَّ ٱللَّهَ غَٰفِلًا عَمَّا
          يَعۡمَلُ ٱلظَّٰلِمُونَۚ إِنَّمَا يُؤَخِّرُهُمۡ لِيَوۡمٖ تَشۡخَصُ فِيهِ
          ٱلۡأَبۡصَٰرُ (42) مُهۡطِعِينَ مُقۡنِعِي رُءُوسِهِمۡ لَا يَرۡتَدُّ
          إِلَيۡهِمۡ طَرۡفُهُمۡۖ وَأَفۡـِٔدَتُهُمۡ هَوَآءٞ (43) وَأَنذِرِ
          ٱلنَّاسَ يَوۡمَ يَأۡتِيهِمُ ٱلۡعَذَابُ فَيَقُولُ ٱلَّذِينَ ظَلَمُواْ
          رَبَّنَآ أَخِّرۡنَآ إِلَىٰٓ أَجَلٖ قَرِيبٖ نُّجِبۡ دَعۡوَتَكَ
          وَنَتَّبِعِ ٱلرُّسُلَۗ أَوَ لَمۡ تَكُونُوٓاْ أَقۡسَمۡتُم مِّن قَبۡلُ
          مَا لَكُم مِّن زَوَالٖ (44) وَسَكَنتُمۡ فِي مَسَٰكِنِ ٱلَّذِينَ
          ظَلَمُوٓاْ أَنفُسَهُمۡ وَتَبَيَّنَ لَكُمۡ كَيۡفَ فَعَلۡنَا بِهِمۡ
          وَضَرَبۡنَا لَكُمُ ٱلۡأَمۡثَالَ (45) وَقَدۡ مَكَرُواْ مَكۡرَهُمۡ
          وَعِندَ ٱللَّهِ مَكۡرُهُمۡ وَإِن كَانَ مَكۡرُهُمۡ لِتَزُولَ مِنۡهُ
          ٱلۡجِبَالُ (46) فَلَا تَحۡسَبَنَّ ٱللَّهَ مُخۡلِفَ وَعۡدِهِۦ
          رُسُلَهُۥٓۚ إِنَّ ٱللَّهَ عَزِيزٞ ذُو ٱنتِقَامٖ (47) يَوۡمَ تُبَدَّلُ
          ٱلۡأَرۡضُ غَيۡرَ ٱلۡأَرۡضِ وَٱلسَّمَٰوَٰتُۖ وَبَرَزُواْ لِلَّهِ
          ٱلۡوَٰحِدِ ٱلۡقَهَّارِ (48) وَتَرَى ٱلۡمُجۡرِمِينَ يَوۡمَئِذٖ
          مُّقَرَّنِينَ فِي ٱلۡأَصۡفَادِ (49) سَرَابِيلُهُم مِّن قَطِرَانٖ
          وَتَغۡشَىٰ وُجُوهَهُمُ ٱلنَّارُ (50) لِيَجۡزِيَ ٱللَّهُ كُلَّ نَفۡسٖ
          مَّا كَسَبَتۡۚ إِنَّ ٱللَّهَ سَرِيعُ ٱلۡحِسَابِ (51) هَٰذَا بَلَٰغٞ
          لِّلنَّاسِ وَلِيُنذَرُواْ بِهِۦ وَلِيَعۡلَمُوٓاْ أَنَّمَا هُوَ إِلَٰهٞ
          وَٰحِدٞ وَلِيَذَّكَّرَ أُوْلُواْ ٱلۡأَلۡبَٰبِ (52)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default Fourteen;
