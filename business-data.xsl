<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<!-- <xsl:output method="xml" version="1.0" indent="yes"/> -->
  <xsl:template match="/">
    <html>
        <body>
          <h3>Search Results</h3>
          <table>
            <th>Business</th>
            <th>Province</th>
            <th>Year Founded</th>
            <th># of Employees</th>
            <xsl:apply-templates select="business-data/business">
              <xsl:sort select="businessName" order="ascending" />
            </xsl:apply-templates>
          </table>
        </body>
    </html>
  </xsl:template>

  <xsl:template match="business">
    <tr>
      <xsl:apply-templates select="businessName" />
      <xsl:apply-templates select="province" />
      <xsl:apply-templates select="yearStarted" />
      <xsl:apply-templates select="employeesTotal" />
    </tr>
  </xsl:template>

  <xsl:template match="businessName">
    <td>
      <xsl:value-of select="."/>
    </td>
  </xsl:template>

  <xsl:template match="provice">
    <td>
      <xsl:value-of select="."/>
    </td>
  </xsl:template>

  <xsl:template match="yearStarted">
    <td>
      <xsl:value-of select="."/>
    </td>
  </xsl:template>

  <xsl:template match="employeesTotal">
    <td>
      <xsl:value-of select="."/>
    </td>
  </xsl:template>

</xsl:stylesheet>
