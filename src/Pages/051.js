import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const FiftyOne = () => {
  return (
    <div>
      <Helmet>
        <title>051 - سورة الذاريات</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الذاريات</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          وَٱلذَّٰرِيَٰتِ ذَرۡوٗا (1) فَٱلۡحَٰمِلَٰتِ وِقۡرٗا (2)
          فَٱلۡجَٰرِيَٰتِ يُسۡرٗا (3) فَٱلۡمُقَسِّمَٰتِ أَمۡرًا (4) إِنَّمَا
          تُوعَدُونَ لَصَادِقٞ (5) وَإِنَّ ٱلدِّينَ لَوَٰقِعٞ (6) وَٱلسَّمَآءِ
          ذَاتِ ٱلۡحُبُكِ (7) إِنَّكُمۡ لَفِي قَوۡلٖ مُّخۡتَلِفٖ (8) يُؤۡفَكُ
          عَنۡهُ مَنۡ أُفِكَ (9) قُتِلَ ٱلۡخَرَّٰصُونَ (10) ٱلَّذِينَ هُمۡ فِي
          غَمۡرَةٖ سَاهُونَ (11) يَسۡـَٔلُونَ أَيَّانَ يَوۡمُ ٱلدِّينِ (12)
          يَوۡمَ هُمۡ عَلَى ٱلنَّارِ يُفۡتَنُونَ (13) ذُوقُواْ فِتۡنَتَكُمۡ
          هَٰذَا ٱلَّذِي كُنتُم بِهِۦ تَسۡتَعۡجِلُونَ (14) إِنَّ ٱلۡمُتَّقِينَ
          فِي جَنَّٰتٖ وَعُيُونٍ (15) ءَاخِذِينَ مَآ ءَاتَىٰهُمۡ رَبُّهُمۡۚ
          إِنَّهُمۡ كَانُواْ قَبۡلَ ذَٰلِكَ مُحۡسِنِينَ (16) كَانُواْ قَلِيلٗا
          مِّنَ ٱلَّيۡلِ مَا يَهۡجَعُونَ (17) وَبِٱلۡأَسۡحَارِ هُمۡ
          يَسۡتَغۡفِرُونَ (18) وَفِيٓ أَمۡوَٰلِهِمۡ حَقّٞ لِّلسَّآئِلِ
          وَٱلۡمَحۡرُومِ (19) وَفِي ٱلۡأَرۡضِ ءَايَٰتٞ لِّلۡمُوقِنِينَ (20)
          وَفِيٓ أَنفُسِكُمۡۚ أَفَلَا تُبۡصِرُونَ (21) وَفِي ٱلسَّمَآءِ
          رِزۡقُكُمۡ وَمَا تُوعَدُونَ (22) فَوَرَبِّ ٱلسَّمَآءِ وَٱلۡأَرۡضِ
          إِنَّهُۥ لَحَقّٞ مِّثۡلَ مَآ أَنَّكُمۡ تَنطِقُونَ (23) هَلۡ أَتَىٰكَ
          حَدِيثُ ضَيۡفِ إِبۡرَٰهِيمَ ٱلۡمُكۡرَمِينَ (24) إِذۡ دَخَلُواْ
          عَلَيۡهِ فَقَالُواْ سَلَٰمٗاۖ قَالَ سَلَٰمٞ قَوۡمٞ مُّنكَرُونَ (25)
          فَرَاغَ إِلَىٰٓ أَهۡلِهِۦ فَجَآءَ بِعِجۡلٖ سَمِينٖ (26) فَقَرَّبَهُۥٓ
          إِلَيۡهِمۡ قَالَ أَلَا تَأۡكُلُونَ (27) فَأَوۡجَسَ مِنۡهُمۡ خِيفَةٗۖ
          قَالُواْ لَا تَخَفۡۖ وَبَشَّرُوهُ بِغُلَٰمٍ عَلِيمٖ (28) فَأَقۡبَلَتِ
          ٱمۡرَأَتُهُۥ فِي صَرَّةٖ فَصَكَّتۡ وَجۡهَهَا وَقَالَتۡ عَجُوزٌ عَقِيمٞ
          (29) قَالُواْ كَذَٰلِكِ قَالَ رَبُّكِۖ إِنَّهُۥ هُوَ ٱلۡحَكِيمُ
          ٱلۡعَلِيمُ (30) ۞قَالَ فَمَا خَطۡبُكُمۡ أَيُّهَا ٱلۡمُرۡسَلُونَ (31)
          قَالُوٓاْ إِنَّآ أُرۡسِلۡنَآ إِلَىٰ قَوۡمٖ مُّجۡرِمِينَ (32)
          لِنُرۡسِلَ عَلَيۡهِمۡ حِجَارَةٗ مِّن طِينٖ (33) مُّسَوَّمَةً عِندَ
          رَبِّكَ لِلۡمُسۡرِفِينَ (34) فَأَخۡرَجۡنَا مَن كَانَ فِيهَا مِنَ
          ٱلۡمُؤۡمِنِينَ (35) فَمَا وَجَدۡنَا فِيهَا غَيۡرَ بَيۡتٖ مِّنَ
          ٱلۡمُسۡلِمِينَ (36) وَتَرَكۡنَا فِيهَآ ءَايَةٗ لِّلَّذِينَ يَخَافُونَ
          ٱلۡعَذَابَ ٱلۡأَلِيمَ (37) وَفِي مُوسَىٰٓ إِذۡ أَرۡسَلۡنَٰهُ إِلَىٰ
          فِرۡعَوۡنَ بِسُلۡطَٰنٖ مُّبِينٖ (38) فَتَوَلَّىٰ بِرُكۡنِهِۦ وَقَالَ
          سَٰحِرٌ أَوۡ مَجۡنُونٞ (39) فَأَخَذۡنَٰهُ وَجُنُودَهُۥ فَنَبَذۡنَٰهُمۡ
          فِي ٱلۡيَمِّ وَهُوَ مُلِيمٞ (40) وَفِي عَادٍ إِذۡ أَرۡسَلۡنَا
          عَلَيۡهِمُ ٱلرِّيحَ ٱلۡعَقِيمَ (41) مَا تَذَرُ مِن شَيۡءٍ أَتَتۡ
          عَلَيۡهِ إِلَّا جَعَلَتۡهُ كَٱلرَّمِيمِ (42) وَفِي ثَمُودَ إِذۡ قِيلَ
          لَهُمۡ تَمَتَّعُواْ حَتَّىٰ حِينٖ (43) فَعَتَوۡاْ عَنۡ أَمۡرِ
          رَبِّهِمۡ فَأَخَذَتۡهُمُ ٱلصَّٰعِقَةُ وَهُمۡ يَنظُرُونَ (44) فَمَا
          ٱسۡتَطَٰعُواْ مِن قِيَامٖ وَمَا كَانُواْ مُنتَصِرِينَ (45) وَقَوۡمَ
          نُوحٖ مِّن قَبۡلُۖ إِنَّهُمۡ كَانُواْ قَوۡمٗا فَٰسِقِينَ (46)
          وَٱلسَّمَآءَ بَنَيۡنَٰهَا بِأَيۡيْدٖ وَإِنَّا لَمُوسِعُونَ (47)
          وَٱلۡأَرۡضَ فَرَشۡنَٰهَا فَنِعۡمَ ٱلۡمَٰهِدُونَ (48) وَمِن كُلِّ
          شَيۡءٍ خَلَقۡنَا زَوۡجَيۡنِ لَعَلَّكُمۡ تَذَكَّرُونَ (49) فَفِرُّوٓاْ
          إِلَى ٱللَّهِۖ إِنِّي لَكُم مِّنۡهُ نَذِيرٞ مُّبِينٞ (50) وَلَا
          تَجۡعَلُواْ مَعَ ٱللَّهِ إِلَٰهًا ءَاخَرَۖ إِنِّي لَكُم مِّنۡهُ
          نَذِيرٞ مُّبِينٞ (51) كَذَٰلِكَ مَآ أَتَى ٱلَّذِينَ مِن قَبۡلِهِم
          مِّن رَّسُولٍ إِلَّا قَالُواْ سَاحِرٌ أَوۡ مَجۡنُونٌ (52)
          أَتَوَاصَوۡاْ بِهِۦۚ بَلۡ هُمۡ قَوۡمٞ طَاغُونَ (53) فَتَوَلَّ عَنۡهُمۡ
          فَمَآ أَنتَ بِمَلُومٖ (54) وَذَكِّرۡ فَإِنَّ ٱلذِّكۡرَىٰ تَنفَعُ
          ٱلۡمُؤۡمِنِينَ (55) وَمَا خَلَقۡتُ ٱلۡجِنَّ وَٱلۡإِنسَ إِلَّا
          لِيَعۡبُدُونِ (56) مَآ أُرِيدُ مِنۡهُم مِّن رِّزۡقٖ وَمَآ أُرِيدُ
          أَن يُطۡعِمُونِ (57) إِنَّ ٱللَّهَ هُوَ ٱلرَّزَّاقُ ذُو ٱلۡقُوَّةِ
          ٱلۡمَتِينُ (58) فَإِنَّ لِلَّذِينَ ظَلَمُواْ ذَنُوبٗا مِّثۡلَ ذَنُوبِ
          أَصۡحَٰبِهِمۡ فَلَا يَسۡتَعۡجِلُونِ (59) فَوَيۡلٞ لِّلَّذِينَ
          كَفَرُواْ مِن يَوۡمِهِمُ ٱلَّذِي يُوعَدُونَ (60)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default FiftyOne;