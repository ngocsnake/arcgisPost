export const steps = [
    {
        title: '1. import acrpy',
        code: 'import arcpy'
    },
    {
        title: '2. Tạo Database',
        code: "arcpy.CreateFileGDB_management('C:\\Output','Database.gdb')"
    },
    {
        title: '3. Tạo FeatureDataset Biên Giới Địa Giới',
        code: "arcpy.CreateFeatureDataset_management('C:\\Output\\Database.gdb','BienGioiDiaGioi','VN 2000 UTM Zone 48N')"
    },
    {
        title: '4. Tạo FeatureClass Đường Cơ Sở Lãnh Hải',
        code: "arcpy.CreateFeatureclass_management('C:\\Output\\Database.gdb\\BienGioiDiaGioi','DuongCoSoLanhHai','POLYLINE')"
    },
    {
        title: '5. Tạo FeatureClass Điểm Cơ Sở Lãnh Hải',
        code: "arcpy.CreateFeatureclass_management('C:\\Output\\Database.gdb\\BienGioiDiaGioi','DiemCoSoLanhHai','POINT')"
    },
    {
        title: '6. Tạo FeatureClass Vùng Biên (Vùng Biển 🤔)',
        code: "arcpy.CreateFeatureclass_management('C:\\Output\\Database.gdb\\BienGioiDiaGioi','VungBien','POLYGON')"
    }
    ,
    {
        title: '7. Thêm lần lượt từng Field cho Đường Cơ Sở Lãnh Hải và Điểm Cơ Sở Lãnh Hải',
        code: `arcpy.AddField_management("DuongCoSoLanhHai", 'maDoiTuong', "TEXT", '', '', 4)`
    }
    ,
    {
        title: '',
        code: `arcpy.AddField_management("DuongCoSoLanhHai", 'chieuDai', "FLOAT")`
    }
    ,
    {
        title: '',
        code: `arcpy.AddField_management("DiemCoSoLanhHai", 'maDoiTuong', "TEXT", '', '', 4)`
    }
    ,
    {
        title: '',
        code: `arcpy.AddField_management("DiemCoSoLanhHai", 'soHieuMoc', "TEXT", '', '', 10)`
    }
    ,
    {
        title: '',
        code: `arcpy.AddField_management("DiemCoSoLanhHai", 'viDo', "FLOAT")`
    }
    ,
    {
        title: '',
        code: `arcpy.AddField_management("DiemCoSoLanhHai", 'kinhDo', "FLOAT")`
    }
    ,
    {
        title: '',
        code: `arcpy.AddField_management("DiemCoSoLanhHai", 'doCaoH', "FLOAT")`
    },
    {
        title: '8. Tạo Domain DoiTuongVungBien',
        code: `arcpy.CreateDomain_management('C:\\Output\\Database.gdb','DoiTuongVungBien','DoiTuongVungBien',"TEXT","CODED","DEFAULT","DEFAULT")`
    },
    {
        title: '9. Thêm Value cho Domain DoiTuongVungBien',
        code: `arcpy.AddCodedValueToDomain_management('C:\\Output\\Database.gdb',"DoiTuongVungBien",'AE01','Vung noi thuy')`
    }
    ,
    {
        title: '',
        code: `arcpy.AddCodedValueToDomain_management('C:\\Output\\Database.gdb',"DoiTuongVungBien",'AE02','Lanh hai')`
    }
    ,
    {
        title: '',
        code: `arcpy.AddCodedValueToDomain_management('C:\\Output\\Database.gdb',"DoiTuongVungBien",'AE03','Vung tiep giap lanh hai')`
    }
    ,
    {
        title: '',
        code: `arcpy.AddCodedValueToDomain_management('C:\\Output\\Database.gdb',"DoiTuongVungBien",'AE04','Vung nuoc lich su')`
    },
    {
        title: '10. Thêm lần lượt từng Field cho Vùng Biên',
        code: `arcpy.AddField_management("VungBien",'maDoiTuong',"TEXT",'','',4,'','','','DoiTuongVungBien')`
    }
    ,
    {
        title: '',
        code: `arcpy.AddField_management("VungBien",'dienTich',"FLOAT")`
    }
]

export const copyToClipboard = (str) => {
    const el = document.createElement("textarea"); // Create a <textarea> element
    el.value = str; // Set its value to the string that you want copied
    el.setAttribute("readonly", ""); // Make it readonly to be tamper-proof
    el.style.position = "absolute";
    el.style.left = "-9999px"; // Move outside the screen to make it invisible
    document.body.appendChild(el); // Append the <textarea> element to the HTML document
    const selected =
        document.getSelection().rangeCount > 0 // Check if there is any content selected previously
            ? document.getSelection().getRangeAt(0) // Store selection if found
            : false; // Mark as false to know no selection existed before
    el.select(); // Select the <textarea> content
    document.execCommand("copy"); // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el); // Remove the <textarea> element
    if (selected) {
        // If a selection existed before copying
        document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
        document.getSelection().addRange(selected); // Restore the original selection
    }
};