<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
        <body>
          <h2>All Business Data</h2>
          <table>
             <tr>
               <th>Company</th>
               <th>Adress 1</th>
               <th>Adress 2</th>
             </tr>
             <tr>
               <td>
                 <xsl:for-each select="business-data/business">
                   <p><xsl:value-of select="businessName" /></p>
                 </xsl:for-each>
               </td>
               <td>
                 <xsl:for-each select="business-data/business">
                   <p><xsl:value-of select="address1" /></p>
                 </xsl:for-each>
               </td>
               <td>
                 <xsl:for-each select="business-data/business">
                   <p><xsl:value-of select="address2" /></p>
                 </xsl:for-each>
               </td>
             </tr>
          </table>
        </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
