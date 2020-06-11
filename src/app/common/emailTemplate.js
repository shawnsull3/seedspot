import React from 'react'

const emailTemplate = (companyResults) => {
    return (
        <table align="center" cellpadding="0" cellspacing="0" width="500" style="border:2px black solid; border-radius: 20px;">
            <td>
                <table align="center" cellpadding="10" cellspacing="0" width="500">
                    <tr>
                        <td align="center" style="padding: 40px 0 5px 0;">
                            Company Name
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="font-weight: bold;" >
                            Startup Report Card
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0px 50px 10px 50px;">
                            <table cellpadding="0" cellspacing="0" width="100%">
                            <tr bgcolor="#4b2c85">
                                <td style="font-size: 0; line-height: 0;" height="7">
                                    &nbsp;
                                </td>
                            </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="font-weight: bold;" >
                            Estimated Valuation
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="font-size: 0.8em; color: #c9c9c9">
                            $5M - $10M
                        </td>
                    </tr>
                </table>
            </td>
            <tr>
                <td style="padding: 20px 50px 0px 0px;" align="end">
                    Grade
                </td>
            </tr>
            <tr>
                <tr>
                    <td style="padding: 0px 0px 10px 20px;" align="start">
                        Daily Ative Users
                    </td>
                </tr>
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" width="100%" style="padding: 0px 0px 20px 0px;">
                            <tr>
                                <td style="font-size: 0; line-height: 0;" width="30">
                                    &nbsp;
                                </td>
                                <td width="250" valign="center">
                                    <table border="1" cellpadding="0" cellspacing="0" height="15" >
                                        <tr>
                                            <td style="font-size: 0; line-height: 0;" width="60" bgcolor='#6fde76'>
                                                &nbsp;
                                            </td>
                                            <td style="font-size: 0; line-height: 0;" width="60" bgcolor='#6fde76'>
                                                &nbsp;
                                            </td>
                                            <td style="font-size: 0; line-height: 0;" width="60" bgcolor='#6fde76'>
                                                &nbsp;
                                            </td>
                                            <td style="font-size: 0; line-height: 0;" width="60" bgcolor='#6fde76'>
                                                &nbsp;
                                            </td>
                                            <td style="font-size: 0; line-height: 0;" width="60" bgcolor='#6fde76'>
                                                &nbsp;
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td width="50" valign="top" style="font-weight: bold; font-size: 1.2em;">
                                    A+
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </tr>
            <tr>
                <tr>
                    <td style="padding: 0px 0px 10px 20px;" align="start">
                        Monthly Ative Users
                    </td>
                </tr>
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td style="font-size: 0; line-height: 0;" width="30">
                                    &nbsp;
                                </td>
                                <td width="250" valign="center">
                                    <table border="1" cellpadding="0" cellspacing="0" height="15">
                                        <tr>
                                            <td style="font-size: 0; line-height: 0;" width="60" bgcolor='#6fde76'>
                                                &nbsp;
                                            </td>
                                            <td style="font-size: 0; line-height: 0;" width="60">
                                                &nbsp;
                                            </td>
                                            <td style="font-size: 0; line-height: 0;" width="60">
                                                &nbsp;
                                            </td>
                                            <td style="font-size: 0; line-height: 0;" width="60">
                                                &nbsp;
                                            </td>
                                            <td style="font-size: 0; line-height: 0;" width="60">
                                                &nbsp;
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td width="50" valign="top" style="font-weight: bold; font-size: 1.2em;">
                                    D
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </tr>
        </table>
    )
}

export default emailTemplate
